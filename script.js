function showInfo(overlayId) {
  var overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.classList.add("open");
  }
}

function hideInfo(bigoverlayId) {
  var bigoverlay = document.getElementById(bigoverlayId);
  if (bigoverlay) {
    bigoverlay.classList.remove("open");
  }
}

