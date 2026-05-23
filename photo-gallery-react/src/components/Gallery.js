import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import ErrorBoundary from "./ErrorBoundary";

const galleryData = [
  {
    src: "/images/Picture2.jpg",
    alt: "Picture 1",
    location: "Earth Atmosphere",
    date: "Satellite Principle",
    description:
      "Satellite remote sensing operates by capturing solar radiation that is reflected from the Earth's surface. The Sun emits incident solar radiation, which passes through the atmosphere and interacts with various surface features such as buildings, roads, grass, water, and forests. Each surface type reflects solar energy differently. Satellites equipped with sensors detect this reflected solar radiation from space. The collected data is then transmitted to ground servers for processing and analysis. This principle enables the monitoring and mapping of land cover, environmental changes, and other surface characteristics without direct contact, providing essential information for scientific research and decision-making.",
  },
  {
    src: "/images/FIG22.png",
    alt: "South Wollo Topography from SRTM data",
    location: "South Wollo",
    date: "SRTM Data Year",
    description:
      "This image displays the topography of South Wollo, derived from Shuttle Radar Topography Mission (SRTM) data. The SRTM provides for the first time a near-global high-resolution digital elevation model (DEM). The elevation information helps in understanding terrain features, watershed analysis, and planning for infrastructure or environmental management in the region.",
  },
  {
    src: "/images/FIG4.png",
    alt: "CALIPSO Satellite Data Image 4",
    location: "Global",
    date: "CALIPSO Mission",
    description:
      "This image presents data from the CALIPSO (Cloud-Aerosol Lidar and Infrared Pathfinder Satellite Observation) satellite mission. CALIPSO uses lidar technology to provide vertical profiles of clouds and aerosols in the atmosphere. The data is crucial for studying cloud structure, aerosol transport, air quality, and their impacts on weather, climate, and human health.",
  },
  {
    src: "/images/FIG5.png",
    alt: "MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km and PM2.5",
    location: "Global",
    date: "Daily (1km)",
    description:
      "This image visualizes the MCD19A2.061 product, which provides daily 1km resolution data on Land Aerosol Optical Depth (AOD) and estimated PM2.5 concentrations from the Terra and Aqua satellites using the MAIAC algorithm. It is crucial for air quality monitoring, climate studies, and understanding the impact of aerosols on human health and the environment.",
  },
  {
    src: "/images/FIG6.png",
    alt: "LandScan Global Population Distribution",
    location: "Global",
    date: "Year TBD",
    description:
      "This image visualizes LandScan population data, providing high-resolution global population distribution. LandScan integrates census data, satellite imagery, and geographic information to estimate population counts and density at a fine spatial scale. It is widely used for urban planning, disaster response, epidemiology, and environmental research.",
  },
  {
    src: "/images/FIG7.png",
    alt: "Image 7",
    location: "Location TBD",
    date: "Date TBD",
    description:
      "Infrared satellite imagery often used for temperature analysis, identifying heat islands or monitoring volcanic activity. This type of imagery is valuable for environmental monitoring, urban planning, and disaster response, as it reveals surface temperature variations and thermal anomalies that are not visible in standard optical imagery.",
  },
  {
    src: "/images/FIG8.png",
    alt: "SMAP Soil Moisture Data Image 8",
    location: "Global",
    date: "SMAP Mission",
    description:
      "This image presents soil moisture data from the Soil Moisture Active Passive (SMAP) satellite mission. SMAP provides global measurements of soil moisture and freeze/thaw state, which are critical for weather forecasting, drought monitoring, agricultural planning, and understanding the Earth's water, energy, and carbon cycles. The data supports improved weather prediction, water resource management, and climate research.",
  },
  {
    src: "/images/FIG9.png",
    alt: "Image 9",
    location: "Location TBD",
    date: "Date TBD",
    description:
      "Detailed view of agricultural patterns from space, allowing for crop type identification and health assessment.",
  },
  {
    src: "/images/FIG10.png",
    alt: "LANDSAT Satellite Imagery Image 10",
    location: "Location TBD",
    date: "LANDSAT Mission",
    description:
      "This image is captured by the LANDSAT satellite, which provides high-resolution, multi-spectral imagery of Earth's surface. LANDSAT data is widely used for land cover classification, environmental monitoring, agricultural assessment, urban expansion studies, and natural resource management. The long-term archive of LANDSAT imagery enables the analysis of changes in land use and land cover over decades.",
  },
  {
    src: "/images/FIG11.png",
    alt: "CHIRPS Precipitation Data Image 11",
    location: "Global",
    date: "CHIRPS Dataset",
    description:
      "This image displays precipitation data from the CHIRPS (Climate Hazards Group InfraRed Precipitation with Station data) dataset. CHIRPS combines satellite imagery with in-situ station data to provide high-resolution rainfall estimates. It is widely used for drought monitoring, agricultural planning, water resource management, and climate research, especially in data-sparse regions.",
  },
  {
    src: "/images/FIG12.png",
    alt: "CMIP6 Climate Model Data Image 12",
    location: "Global",
    date: "CMIP6 Dataset",
    description:
      "This image presents data from the CMIP6 (Coupled Model Intercomparison Project Phase 6) climate models. CMIP6 provides multi-model climate projections used to assess future climate scenarios, study temperature and precipitation trends, and inform policy decisions on climate change mitigation and adaptation. The dataset is a cornerstone for international climate assessments, including IPCC reports.",
  },
  {
    src: "/images/FIG13.png",
    alt: "CALIPSO Satellite Data Image 15",
    location: "Global",
    date: "CALIPSO Mission",
    description:
      "This image presents data from the CALIPSO (Cloud-Aerosol Lidar and Infrared Pathfinder Satellite Observation) satellite mission. CALIPSO uses lidar technology to provide vertical profiles of clouds and aerosols in the atmosphere. The data is crucial for studying cloud structure, aerosol transport, air quality, and their impacts on weather, climate, and human health.",
  },
  {
    src: "/images/FIG14.png",
    alt: "GRACE Satellite Drought Data Image 9",
    location: "Global",
    date: "GRACE Mission",
    description:
      "This image displays drought conditions as observed by the GRACE (Gravity Recovery and Climate Experiment) satellite mission. GRACE measures changes in Earth's gravity field to monitor variations in terrestrial water storage, including groundwater, soil moisture, and surface water. The data is essential for drought assessment, water resource management, and understanding the impacts of climate variability on hydrological systems.",
  },
  {
    src: "/images/FIG22.png",
    alt: "MISR Aerosol Data Image 16",
    location: "Global",
    date: "MISR Mission",
    description:
      "This image presents aerosol data from the MISR (Multi-angle Imaging SpectroRadiometer) instrument aboard NASA's Terra satellite. MISR observes the Earth's atmosphere from multiple angles to characterize aerosol properties, such as type, concentration, and distribution. The data is essential for air quality monitoring, climate research, and understanding the effects of aerosols on weather, radiation balance, and human health.",
  },
];

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [failedImages, setFailedImages] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Preload images with timeout
    const loadImages = async () => {
      const imagePromises = galleryData.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;

          // Add timeout to prevent hanging
          const timeout = setTimeout(() => {
            reject(new Error(`Timeout loading image: ${image.src}`));
          }, 15000); // 15 second timeout

          img.onload = () => {
            clearTimeout(timeout);
            resolve();
          };
          img.onerror = (error) => {
            clearTimeout(timeout);
            reject({ error, image });
          };
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
        setLoadError(null);
        setFailedImages([]);
      } catch (error) {
        console.error("Error loading images:", error);
        const failedImage = error.image || { src: 'unknown' };
        setFailedImages(prev => {
          if (prev.includes(failedImage.src)) {
            return prev;
          }
          const newFailedImages = [...prev, failedImage.src];
          setLoadError(
            `Failed to load ${newFailedImages.length} image(s). Please check your internet connection and try again.`
          );
          return newFailedImages;
        });
        setImagesLoaded(true); // Still show gallery even if some images fail
      }
    };

    loadImages();
  }, [retryCount]);

  const handleRetry = useCallback(() => {
    setRetryCount(prev => prev + 1);
    setLoadError(null);
    setFailedImages([]);
    setImagesLoaded(false);
  }, []);

  const openLightbox = useCallback((image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = galleryData.length - 1;
      if (newIndex >= galleryData.length) newIndex = 0;
      setCurrentIndex(newIndex);
      setCurrentImage(galleryData[newIndex]);
    },
    [currentIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage(-1);
          break;
        case "ArrowRight":
          navigateImage(1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, navigateImage, closeLightbox]);

  if (!imagesLoaded) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="error-container">
        <p className="error-message">{loadError}</p>
        <div className="retry-options">
          <button
            className="retry-button"
            onClick={handleRetry}
          >
            Retry Loading
          </button>
          <button
            className="retry-button secondary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
        {failedImages.length > 0 && (
          <div className="failed-images">
            <p>Failed to load the following images:</p>
            <ul>
              {[...new Set(failedImages)].map((src, index) => (
                <li key={index}>{src}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <section className="gallery-intro">
        <h2>Gallery</h2>
        <p>
          Explore our curated collection of satellite images showcasing diverse
          landscapes, environmental changes, and the power of remote sensing
          technology. Click on any image to learn more about its location, date,
          and significance.
        </p>
        <div className="gallery-grid" aria-label="Satellite Image Gallery">
          {galleryData.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.png"; // Add a placeholder image
                }}
              />
              <div className="gallery-item-info">
                <p>Location: {image.location}</p>
                <p>Date: {image.date}</p>
                <p className="image-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        {lightboxOpen && currentImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <span className="close-button">&times;</span>
            <button
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              &#10094;
            </button>
            <img
              className="lightbox-content"
              src={currentImage.src}
              alt={currentImage.alt}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              &#10095;
            </button>
            <div className="caption">
              <p>{currentImage.alt}</p>
              <p>
                Location: {currentImage.location} | Date: {currentImage.date}
              </p>
              <p className="image-description">{currentImage.description}</p>
            </div>
          </div>
        )}
      </section>
    </ErrorBoundary>
  );
}

export default Gallery;
