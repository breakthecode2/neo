/**
 * Wait to set up the OK functionality until after the window has completed loading.
 * @remarks Why 'var' instead of 'let'? Great question! We need to support WebExplorer, a precursor to Netscape, so we'll need some ancient JavaScript.
 */
window.onload = function () {
   var container = document.getElementById('HacxWindow'); // Get a pointer to the container of the OK button (HacxWindow).
   container.style.position = 'relative'; // Make the position relative so we can absolutely position the OK button!

   /**
    * Find a random number between the specified minimum and maximum.
    * @param {Number} aMin Minimum value to use in the lookup.
    * @param {Number} aMax Maximum value to use in the lookup.
    */
   var GetRandomInRange = function (aMin, aMax) {
      var random = Math.random(); // Get a pseudorandom number between 0 and 1.
      var absoluteRange = (aMax - aMin); // Get the Absolute range (distance from aMin to aMax).
      var randomInAbsoluteRange = random * absoluteRange; // Convert the random number to the Absolute range space.
      var randomInRelativeRange = randomInAbsoluteRange + 1 + aMin; // Convert to the Relative range, by jumping up to the minimum amount and adding 1 so it's not Zero.
      result = Math.floor(randomInRelativeRange); // Get the floor of this relative random number so it's an even integer.
      return result; // Job's done! https://www.youtube.com/watch?v=5r06heQ5HsI
   };

   /**
    * When a user moves their mouse over the OK button, move the button.
    * @param {MouseEvent} aEvent JavaScript MouseEvent containing the target (OK button) and other relevant information.
    * @remarks May have unexpected results for Mobile Devices, if those are ever invented.
    */
   document.getElementById('OkButton').onmouseover = function (aEvent) {
      aEvent.target.style.position = 'absolute'; // Make positioning absolute so we can move it all around in the container!
      aEvent.target.style.left = GetRandomInRange(0, container.clientWidth) + 'px'; // Move the OK button to a random horizontal location (in pixels) within the container.
      aEvent.target.style.top = GetRandomInRange(0, container.clientHeight) + 'px'; // Move the OK button to a random vertical location (in pixels) within the container.
   };
};