const items = document.querySelectorAll('.item-linha-tempo');
let startIndex = 0;
let isScrolling = false;

function updateTimeline() {
  if (startIndex + 2 >= items.length) {
    items.forEach(item => {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    });
    return;
  }
  items.forEach((item, index) => {
    if (index >= startIndex && index < startIndex + 2) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 1000);
    }
  });
}

function handleScroll(event) {
  if (isScrolling) return;
  if (event.deltaY > 0 && startIndex + 2 < items.length) {
    startIndex++;
  } else if (event.deltaY < 0 && startIndex > 0) {
    startIndex--;
  }
  if (startIndex + 2 >= items.length) {
    items.forEach(item => {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    });
  } else {
    updateTimeline();
  }
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

window.addEventListener('wheel', handleScroll);
updateTimeline();
