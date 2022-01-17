const body = document.body;
handleResizeWidow();

function handleResizeWidow() {
  const currentSize = window.innerWidth;
  const largeSize = "large";
  const mediumSize = "medium";
  const smallSize = "small";

  if (currentSize >= 1076) {
    body.classList.add(largeSize);
    body.classList.remove(mediumSize);
  } else if (currentSize >= 768 && currentSize < 1076) {
    body.classList.add(mediumSize);
    body.classList.remove(largeSize, smallSize);
  } else {
    body.classList.add(smallSize);
    body.classList.remove(mediumSize);
  }
}

window.addEventListener("resize", handleResizeWidow);

