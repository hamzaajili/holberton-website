  document.addEventListener("DOMContentLoaded", function(event) {
  
    var thumbnailElement = document.getElementById("smart_thumbnail");
    var thumbnailText = document.getElementById("smart_thumbnail_text");
  
    const toggleSmartTumbnail = () => {
  
      if (thumbnailElement.className == "small") {
        thumbnailElement.classList.remove("small");
        thumbnailText.innerText = "Press the image above to make it smaller";
      } else {
        thumbnailElement.classList.add("small");
        thumbnailText.innerText ="Press the image above to make it bigger";
      }
    };
  
    thumbnailElement && thumbnailElement.addEventListener("click", toggleSmartTumbnail);

  });
  