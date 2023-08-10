function getRandomPercentage() {
  return Math.random() * 100 + '%';
}

function animateElement(selector, duration) {
  anime({
    targets: selector,
    translateX: () => getRandomPercentage(),
    duration: duration,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });
}

animateElement('.name', 1000);
animateElement('.rename', 1000);
animateElement('.adores01', 3000);
animateElement('.adores', 1000);
animateElement('.tell', 1000);
animateElement('.Email', 3000);
