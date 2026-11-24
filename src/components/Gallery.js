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
    src: "/images/Gallery/Picture2.jpg",
    alt: "Satellite Remote Sensing Principle",
    location: "Earth-Atmosphere Interface",
    date: "Satellite Principle",
    description:
      "Satellite remote sensing operates by capturing solar radiation that is reflected from the Earth's surface. The Sun emits incident solar radiation, which passes through the atmosphere and interacts with various surface features such as buildings, roads, grass, water, and forests. Each surface type reflects solar energy differently. Satellites equipped with sensors detect this reflected solar radiation from space. The collected data is then transmitted to ground servers for processing and analysis. This principle enables the monitoring and mapping of land cover, environmental changes, and other surface characteristics without direct contact, providing essential information for scientific research and decision-making.",
  },
  {
    src: "/images/Gallery/FIG2.png",
    alt: "SRTM Topography - Wollo, Ethiopia",
    location: "Wollo, Ethiopia",
    date: "SRTM (2000)",
    description:
      "Digital elevation model (DEM) of the Wollo region derived from Shuttle Radar Topography Mission (SRTM, 30 m) data, hill-shaded for relief. Elevation ranges from ~0 to 4,200 m. The topography controls drainage, watershed analysis, agriculture suitability, and infrastructure planning in the region.",
  },
  {
    src: "/images/Gallery/FIG3.png",
    alt: "Urban Growth - VIIRS Night-Time Lights (2021)",
    location: "Ethiopia",
    date: "2021",
    description:
      "Urban growth visualized through VIIRS Day/Night Band (DNB) night-time lights (NOAA/VIIRS/DNB/MONTHLY_V1, VCMSLCFG) for 2021. Night-time light intensity is widely used as a proxy for urbanization, electrification, and economic activity, revealing the spatial distribution and expansion of settlements across Ethiopia.",
  },
  {
    src: "/images/Gallery/FIG4.png",
    alt: "GRACE Total Water Storage Change 2002-2023 (cm)",
    location: "Ethiopia",
    date: "2002-2023",
    description:
      "Long-term terrestrial water storage change (cm) estimated from GRACE satellite gravity measurements over 2002-2023. GRACE tracks the total water stored on and below the land surface - groundwater, soil moisture, and surface water - making this data essential for water resource assessment, drought monitoring, and climate-change impact studies.",
  },
  {
    src: "/images/Gallery/FIG5.png",
    alt: "Total Aerosol Optical Depth at 550 nm (CAMS reanalysis)",
    location: "Ethiopia",
    date: "July 2020",
    description:
      "Total aerosol optical depth at 550 nm (~40 km resolution) from the ECMWF CAMS (ECMWF/CAMS/NRT) reanalysis for July 2020. AOD quantifies how much solar radiation is attenuated by airborne particles. It is crucial for air-quality monitoring, health studies, and understanding aerosol-radiation-climate interactions.",
  },
  {
    src: "/images/Gallery/FIG6.png",
    alt: "Population Distribution (WorldPop, 100 m)",
    location: "Ethiopia",
    date: "2020",
    description:
      "Population distribution at 100 m resolution from the WorldPop/GP/100m population dataset for Ethiopia (2020). WorldPop blends census counts, settlement mapping, and satellite imagery into gridded population estimates used for urban planning, disaster response, epidemiology, and resource allocation.",
  },
  {
    src: "/images/Gallery/FIG7.png",
    alt: "Land Surface Temperature (Landsat 8 Thermal Infrared, deg C)",
    location: "Ethiopia",
    date: "Mar-May 2022",
    description:
      "Land surface temperature (deg C) derived from Landsat 8 Collection-2 thermal infrared (band 10, ST_B10) for the March-May 2022 season. LST reveals surface temperature variations and thermal anomalies that are invisible in optical imagery, supporting heat-island analysis, drought monitoring, water-stress assessment, and climate research.",
  },
  {
    src: "/images/Gallery/FIG8.png",
    alt: "Surface Soil Moisture (SMAP)",
    location: "Ethiopia",
    date: "July 2021",
    description:
      "Surface soil moisture (m3 m-3) from NASA's Soil Moisture Active Passive (SMAP) mission SPL4SMGP product for early July 2021. Soil moisture is critical for weather forecasting, drought monitoring, agricultural planning, and understanding the Earth's water, energy, and carbon cycles.",
  },
  {
    src: "/images/Gallery/FIG9.png",
    alt: "Agricultural Land & Crop Health (Landsat NDVI)",
    location: "South Wollo, Ethiopia",
    date: "Sep-Nov 2022",
    description:
      "Agricultural land and crop health in South Wollo computed as the Normalized Difference Vegetation Index (NDVI) from Landsat 8 Collection-2 surface reflectance for the Sep-Nov 2022 growing season. High NDVI indicates dense, healthy vegetation; the map supports crop monitoring, food-security assessments, and agricultural management.",
  },
  {
    src: "/images/Gallery/FIG10.png",
    alt: "LANDSAT Natural-Colour Composite",
    location: "Ethiopia",
    date: "Nov 2021-Feb 2022 (dry season)",
    description:
      "Natural-colour (true colour) composite of Ethiopia from Landsat 8 Collection-2 surface reflectance (red-green-blue) for the 2021-22 dry season. Such composites provide a realistic view of the land surface used for land-cover classification, visual interpretation, environmental monitoring, and change detection.",
  },
  {
    src: "/images/Gallery/FIG11.png",
    alt: "Precipitation (CHIRPS)",
    location: "Ethiopia",
    date: "Jun-Sep 2021",
    description:
      "Total rainfall (mm) for the June-September 2021 long-rains (Kiremt) season from the CHIRPS dataset (UCSB-CHG, ~5 km). CHIRPS blends satellite infrared precipitation estimates with station data, and is widely used for drought monitoring, agricultural planning, water-resource management, and climate research in data-sparse regions.",
  },
  {
    src: "/images/Gallery/FIG12.png",
    alt: "CMIP6 SSP5-8.5 Warming 2081 vs 1995-2014 (deg C)",
    location: "Oromia, Ethiopia",
    date: "2081 (projection vs baseline)",
    description:
      "Surface-air-temperature anomaly (deg C) for the 2081 wet season projected by the ACCESS-CM2 CMIP6 model under the high-emission SSP5-8.5 scenario, relative to the 1995-2014 historical baseline (NASA/GDDP-CMIP6). Such projections support climate-change impact assessment, adaptation planning, and policy decisions.",
  },
  {
    src: "/images/Gallery/FIG13.png",
    alt: "GRACE Terrestrial Water Storage Anomaly 2019-2020 (cm)",
    location: "Ethiopia",
    date: "2019-2020",
    description:
      "Terrestrial water storage anomaly (cm) from GRACE satellite gravity data for 2019-2020. The anomaly expresses deviation of total water storage (groundwater, soil moisture, and surface water) from its long-term mean, providing key insight into wet/dry hydrological conditions and water-resource variability.",
  },
  {
    src: "/images/Gallery/FIG14.png",
    alt: "GRACE Terrestrial Water Storage Anomaly - Drought (cm)",
    location: "Ethiopia",
    date: "early 2016 (El Niño drought)",
    description:
      "Drought conditions visualized through the GRACE terrestrial water storage anomaly (cm) for early 2016, the period of severe El Niño-triggered drought. Negative anomalies indicate depleted water storage, essential for drought early warning, humanitarian response, and water-resource management.",
  },
  {
    src: "/images/Gallery/FIG15.png",
    alt: "Aerosol Optical Depth 550 nm (MERRA-2) - Dust/Harmattan, Afar",
    location: "Afar, Ethiopia",
    date: "Jan 2020 & Dec 2019-Feb 2020 (dusty season)",
    description:
      "Aerosol optical depth at 550 nm from NASA MERRA-2 reanalysis (NASA/GSFC/MERRA/aer/2), shown for January 2020 and the full Dec 2019-Feb 2020 dusty season over the Afar region. The high AOD values reflect mineral dust loading transported from the Afar depression, and the map supports dust-transport and air-quality studies. This differs from FIG5 (CAMS, July 2020): different dataset, date window, and palette.",
  },
  {
    src: "/images/Gallery/FIG16.png",
    alt: "Drought Early Warning - CHIRPS Rainfall 2021 minus 2015 (mm)",
    location: "Wollo, Ethiopia",
    date: "Jun-Sep 2021 vs Jun-Sep 2015",
    description:
      "Drought early-warning difference map of CHIRPS rainfall (mm) for the Kiremt season of 2021 compared with the 2015 El Niño drought year over Wollo. Blue indicates wetter-than-drought conditions; brown (negative) indicates rainfall deficit. This ASYP-style comparison supports anticipatory drought action and food-security planning.",
  },
  {
    src: "/images/Gallery/FIG17.png",
    alt: "Surface Water Resources (Landsat NDWI)",
    location: "Ethiopia",
    date: "Jan-Mar 2022",
    description:
      "Surface water resources mapped with the Normalized Difference Water Index (NDWI) from Landsat 8 Collection-2 surface reflectance for Jan-Mar 2022. Bright blue tones identify lakes, reservoirs, rivers, and wetlands, supporting water-resource inventory, flood mapping, and aquatic ecosystem monitoring.",
  },
  {
    src: "/images/Gallery/FIG18.png",
    alt: "Vegetation Condition (MODIS NDVI)",
    location: "Amhara, Ethiopia",
    date: "Sep-Nov 2022",
    description:
      "Vegetation condition over Amhara computed as NDVI from the MODIS MOD13Q1 (16-day, 250 m) product for Sep-Nov 2022. NDVI tracks photosynthetic activity and is used to monitor crop health, vegetation vigour, and land degradation during the growing season.",
  },
  {
    src: "/images/Gallery/FIG19.png",
    alt: "VCI Vegetation Condition Index",
    location: "Amhara, Ethiopia",
    date: "Kiremt rains 2021 & 2022",
    description:
      "Vegetation Condition Index (VCI) for the Kiremt rainy seasons of 2021 and 2022 over Amhara. VCI is the current NDVI normalized against the 2000-2020 green-season climatological min/max range. Values below 0.35 indicate vegetation moisture stress / drought; values above 0.7 indicate healthy, wet vegetation.",
  },
  {
    src: "/images/Gallery/FIG20.png",
    alt: "TCI Temperature Condition Index",
    location: "Amhara, Ethiopia",
    date: "Kiremt rains 2021 & 2022",
    description:
      "Temperature Condition Index (TCI) for the Kiremt rainy seasons of 2021 and 2022 over Amhara, computed from MODIS MOD11A2 land-surface temperature against the 2000-2020 climatological range. Low TCI means abnormally high land-surface temperature (thermal stress), while high TCI indicates cool, wet conditions.",
  },
  {
    src: "/images/Gallery/FIG21.png",
    alt: "Water Use Efficiency (GPP / ET)",
    location: "North Wollo, Ethiopia",
    date: "Jul-Oct 2022",
    description:
      "Water Use Efficiency (WUE) - gross primary production divided by evapotranspiration (g C per kg H2O) - for the Jul-Oct 2022 green season over North Wollo, derived from MODIS GPP (MOD17A2H) and ET (MOD16A2). Higher WUE means more carbon gained per unit of water used, indicating drought resilience of crops and vegetation.",
  },
  {
    src: "/images/Gallery/FIG22.png",
    alt: "Population Count (WorldPop, 100 m) - Wollo",
    location: "Wollo, Ethiopia",
    date: "2020",
    description:
      "Gridded population count at 100 m resolution from WorldPop (WorldPop/GP/100m/pop, 2020) for the Wollo region, shown on a log10 stretch so sparse rural cells and dense towns are both visible. Supporting plots summarise the population field: per-cell distribution, population by 500 m elevation band, and the cumulative population share against elevation, showing that most of Wollo's people live in the 1500-2500 m mid-altitude highlands.",
  },
  {
    src: "/images/Gallery/FIG23.png",
    alt: "Burned Area (MODIS MCD64A1) - 2021",
    location: "Ethiopia",
    date: "2021",
    description:
      "Wildfire monitoring: burned-area day of year from the MODIS MCD64A1 Collection-6.1 product for 2021 over Ethiopia. Only pixels that burned during the year are coloured, by burn date, supporting fire-risk assessment, rangeland and forest-fire management, and burn-severity studies.",
  },
  {
    src: "/images/Gallery/FIG24.png",
    alt: "Land Cover Classification (ESA WorldCover v200, 10 m)",
    location: "Ethiopia",
    date: "2021",
    description:
      "Categorical land-cover map from the ESA WorldCover v200 (10 m, 2021) product for Ethiopia. Classes include tree cover, shrubland, grassland, cropland, built-up, bare, water, wetland, mangrove, and moss - the foundation for land-use planning, ecosystem accounting, and change monitoring.",
  },
  {
    src: "/images/Gallery/FIG25.png",
    alt: "Snow Cover Frequency (MODIS MOD10A1) - Amhara",
    location: "Amhara, Ethiopia",
    date: "Dec 2021 - Feb 2022",
    description:
      "Cryosphere monitoring: mean snow-cover percentage from MODIS MOD10A1 (500 m) for the boreal winter window Dec 2021 - Feb 2022 over the Amhara highlands. Seasonal snow on peaks such as Ras Dashen feeds highland rivers and is a sensitive indicator of climate variability.",
  },
  {
    src: "/images/Gallery/FIG26.png",
    alt: "Sentinel-2 False Colour (NIR-R-G) - Wollo",
    location: "Wollo, Ethiopia",
    date: "Jan-Mar 2022",
    description:
      "High-resolution optical imagery: 10 m Sentinel-2 (COPERNICUS/S2_HARMONIZED) near-infrared-red-green composite for Jan-Mar 2022 over Wollo. Dense vegetation appears red, bare soil pale, and water dark, giving a detailed view of the agricultural landscape and settlements.",
  },
  {
    src: "/images/Gallery/FIG27.png",
    alt: "Net Primary Productivity (MODIS MOD17A3HGF) - 2021",
    location: "Ethiopia",
    date: "2021",
    description:
      "Carbon and productivity project: annual net primary production (kg C / m2 / yr) from MODIS MOD17A3HGF (500 m, Collection 6.1) for 2021 over Ethiopia. High NPP marks the dense highland forests and the wet western slopes - the country's main carbon sinks.",
  },
  {
    src: "/images/Gallery/FIG28.png",
    alt: "Enhanced Vegetation Index (MODIS MOD13Q1) - Amhara",
    location: "Amhara, Ethiopia",
    date: "Sep-Nov 2022",
    description:
      "Vegetation dynamics: mean Enhanced Vegetation Index (EVI) from MODIS MOD13Q1 (250 m, 16-day, Collection 6.1) for the Sep-Nov 2022 growing season over Amhara. EVI is less saturated than NDVI in dense vegetation and better tracks greenness and crop vigour.",
  },
  {
    src: "/images/Gallery/FIG29.png",
    alt: "Dust Extinction AOD 550 nm (MERRA-2) - Afar",
    location: "Afar, Ethiopia",
    date: "January 2020",
    description:
      "Dust-transport project: monthly mean dust extinction optical depth at 550 nm from NASA MERRA-2 reanalysis (NASA/GSFC/MERRA/aer/2) for January 2020 over the Afar region. High values trace mineral-dust plumes blown from the Afar depression and the Danakil area.",
  },
  {
    src: "/images/Gallery/FIG30.png",
    alt: "Satellite Rainfall (GPM IMERG) - Jun-Sep 2021",
    location: "Ethiopia",
    date: "Jun-Sep 2021",
    description:
      "Satellite rainfall project: total rainfall (mm) for the June-September 2021 long-rains (Kiremt) season from the Integrated Multi-satellite Retrievals for GPM (IMERG, Level-3 monthly, V07). Each monthly mean precipitation rate is converted to a monthly total and summed over the season.",
  },
];

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState([]);

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
