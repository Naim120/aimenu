function showInfo(overlayId) {
  var overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.classList.add("open");
  }
}

function hideInfo(overlayId) {
  var overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.classList.remove("open");
  }
}

function closeOverlay() {
  var overlay = document.querySelector('.bigoverlay.open');
  if (overlay) {
    overlay.classList.remove('open');
  }
}

document.querySelector('.big-button').addEventListener('click', closeOverlay);
