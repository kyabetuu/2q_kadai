/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFJhbmRvbVBlcmNlbnRhZ2UoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogMTAwICsgJyUnO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlRWxlbWVudChzZWxlY3RvciwgZHVyYXRpb24pIHtcbiAgYW5pbWUoe1xuICAgIHRhcmdldHM6IHNlbGVjdG9yLFxuICAgIHRyYW5zbGF0ZVg6ICgpID0+IGdldFJhbmRvbVBlcmNlbnRhZ2UoKSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgZWFzaW5nOiAnZWFzZUluT3V0U2luZScsXG4gICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcbiAgICBsb29wOiB0cnVlXG4gIH0pO1xufVxuXG5hbmltYXRlRWxlbWVudCgnLm5hbWUnLCAxMDAwKTtcbmFuaW1hdGVFbGVtZW50KCcucmVuYW1lJywgMTAwMCk7XG5hbmltYXRlRWxlbWVudCgnLmFkb3JlczAxJywgMzAwMCk7XG5hbmltYXRlRWxlbWVudCgnLmFkb3JlcycsIDEwMDApO1xuYW5pbWF0ZUVsZW1lbnQoJy50ZWxsJywgMTAwMCk7XG5hbmltYXRlRWxlbWVudCgnLkVtYWlsJywgMzAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=