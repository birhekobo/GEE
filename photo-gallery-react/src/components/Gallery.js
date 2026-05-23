import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import ErrorBoundary from "./ErrorBoundary";

const IMAGE_PLACEHOLDER =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect fill="#e8eef5" width="400" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6c757d" font-family="Arial,sans-serif" font-size="14">Image unavailable</text></svg>'
  );

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
    src: "/images/FIG2.png",
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
    src: "/images/FIG15.png",
    alt: "MISR Aerosol Data Image 16",
    location: "Global",
    date: "MISR Mission",
    description:
      "This image presents aerosol data from the MISR (Multi-angle Imaging SpectroRadiometer) instrument aboard NASA's Terra satellite. MISR observes the Earth's atmosphere from multiple angles to characterize aerosol properties, such as type, concentration, and distribution. The data is essential for air quality monitoring, climate research, and understanding the effects of aerosols on weather, radiation balance, and human health.",
  },
];

function preloadImage(image, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const timeout = setTimeout(() => {
      reject(new Error(`Timeout loading image: ${image.src}`));
    }, timeoutMs);

    img.onload = () => {
      clearTimeout(timeout);
      resolve(image.src);
    };
    img.onerror = () => {
      clearTimeout(timeout);
      reject(new Error(`Failed to load image: ${image.src}`));
    };
    img.src = image.src;
  });
}

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const [failedImages, setFailedImages] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      const results = await Promise.allSettled(
        galleryData.map((image) => preloadImage(image))
      );

      if (cancelled) return;

      const failed = results
        .map((result, index) =>
          result.status === "rejected" ? galleryData[index].src : null
        )
        .filter(Boolean);

      setFailedImages(failed);
      setImagesReady(true);
    };

    setImagesReady(false);
    loadImages();

    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  const handleRetry = useCallback(() => {
    setRetryCount((prev) => prev + 1);
    setFailedImages([]);
  }, []);

  const handleImageError = useCallback((src) => {
    setFailedImages((prev) => (prev.includes(src) ? prev : [...prev, src]));
  }, []);

  const getImageSrc = useCallback(
    (src) => (failedImages.includes(src) ? IMAGE_PLACEHOLDER : src),
    [failedImages]
  );

  const openLightbox = useCallback((image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, navigateImage, closeLightbox]);

  if (!imagesReady) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading gallery...</p>
      </div>
    );
  }

  const hasFailures = failedImages.length > 0;

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

        {hasFailures && (
          <div className="gallery-warning" role="status">
            <p>
              {failedImages.length} of {galleryData.length} image(s) could not
              be loaded. Placeholders are shown below. Ensure image files exist
              in <code>public/images/</code> or check your connection.
            </p>
            <button type="button" className="retry-button" onClick={handleRetry}>
              Retry Loading
            </button>
          </div>
        )}

        <div className="gallery-grid" aria-label="Satellite Image Gallery">
          {galleryData.map((image, index) => {
            const failed = failedImages.includes(image.src);
            return (
              <div
                key={`${image.src}-${index}`}
                className={`gallery-item${failed ? " gallery-item--failed" : ""}`}
                onClick={() => openLightbox(image, index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(image, index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={getImageSrc(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    handleImageError(image.src);
                    e.target.src = IMAGE_PLACEHOLDER;
                  }}
                />
                {failed && (
                  <span className="gallery-item-badge">Unavailable</span>
                )}
                <div className="gallery-item-info">
                  <p>Location: {image.location}</p>
                  <p>Date: {image.date}</p>
                  <p className="image-description">{image.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {lightboxOpen && currentImage && (
          <div
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={currentImage.alt}
          >
            <span
              className="close-button"
              onClick={closeLightbox}
              role="button"
              tabIndex={0}
              aria-label="Close gallery"
            >
              &times;
            </span>
            <button
              type="button"
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <img
              className="lightbox-content"
              src={getImageSrc(currentImage.src)}
              alt={currentImage.alt}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.onerror = null;
                handleImageError(currentImage.src);
                e.target.src = IMAGE_PLACEHOLDER;
              }}
            />
            <button
              type="button"
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
            <div className="caption" onClick={(e) => e.stopPropagation()}>
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
