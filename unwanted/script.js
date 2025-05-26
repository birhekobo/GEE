document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeButton = document.querySelector(".close-button");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgElement = item.querySelector("img");
      lightbox.style.display = "block";
      lightboxImg.src = imgElement.src;
      lightboxImg.alt = imgElement.alt;

      const location = imgElement.dataset.location;
      const date = imgElement.dataset.date;
      const description = imgElement.dataset.description;
      captionText.innerHTML = `<p>${imgElement.alt}</p><p>Location: ${location} | Date: ${date}</p><p class="image-description">${description}</p>`;
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      // Check if the click is on the lightbox background itself
      lightbox.style.display = "none";
    }
  });
});
