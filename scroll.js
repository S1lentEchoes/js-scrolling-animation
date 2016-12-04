/*-------------------------------------------------------------------*\
------------------ #SCROLLING-FUNCTION -------------------
\*-------------------------------------------------------------------*/

/* *
 * Scroll function for user interactive buttons to scroll the page.  For
 * scrolling back to the top of the page, for example, which I tend to use on a
 * lot of projects.
 *
 * After playing with another function that included multiple checks on the
 * scrollLength value, for determining how far the page should be scrolled I
 * settled on this functionality.  This takes the scrollLength and divides it by
 * 30, which allows all functionality to be controlled inside 1 calculation.  30
 * seemed to work best with both big and small scrollLength values.  Meaning, at
 * large scrollLength values, dividing by 30 would provide enough of a scrolling
 * value for animation (i.e. not being too small of a value resulting in
 * scrolling animations of only a few pixels), while also not being "too big" of
 * a value (100's of pixels each interval).
 *
 * As that calculation is being performed, Math.ceil is used so that a floating
 * point number is not used, since programming calculations and floating point
 * numbers do not play well.  This also means that as scrollLength continues to
 * decrease and eventually reach 30, the calculation will still round up and
 * arrive, at a minimum, of 0.  At which point, the animation will end.  All
 * this meaning, no extra conditionals are needed for when scrollLength reaches,
 * or goes below, 30 since the number will be rounded up.
 *
 * All this means, that at say 1500px the animation will scroll 50px.  At 900px,
 * it will scroll 30px.  And so on and so on.  Eventually this will decrease to
 * a few pixels and then 1px as the animation is ending.  This is less "jarring"
 * for the user since the page will never just stop abruptly when the page is
 * scrolled, but at large scrollLength values the animation will still scroll
 * enough that it does not take too long either.
 *
 * Even though dividing by 30 provides a good balance for both large and small
 * scrollLength values, intervalSetting can be used so that if a particular
 * scrolling animation needs to be done fast (or slow) this value can be tweaked
 * to still allow that.
 */

function scroll(scrollLength, startingPos, intervalSetting) {

	'use strict';

	var interval, origScrollLength;

	origScrollLength = scrollLength;  // Since we will need to alter the scrollLength value, store it here so that it can be used for calculations inside the interval

	// Main loop function for scroll
	interval = setInterval(function () {

		// When scrollLength reaches 0 (or if it somehow goes below 0), scroll the window to the original scrollLength (as a redundancy), and clear the interval
		if (scrollLength <= 0) {

			window.scrollTo(0, origScrollLength);  // Set the window position equal to the original scrollLength;  This is a redundancy setting just to make sure the window ends up at the correct place - in case of a weird negative or floating point number, for example

			clearInterval(interval);  // Finally, clear the interval

		// As long as scrollLength remains above 0, continue the calculations to determine the new window position
	} else if (scrollLength > 0) {

			scrollLength -= Math.ceil(scrollLength / 30);  // After playing with some numbers, 30 seemed to provide the best value for working with both big and small scrollLength values - i.e. at large scrollLength values it will not be "too big", and it will also decrease at a good rate for animation;  The idea behind this is that it will scroll faster the higher the value of scrollLength, and gradually get slower as scrollLength decreases;  Of course, this value needs to be rounded up to the nearest whole integer so that we are not using floating point numbers in our calculations, since floating point numbers and javascript do not play well

			startingPos = origScrollLength - scrollLength;  // Subtract the new scrollLength value from the original scrollLength value to determine how far the page should get scrolled down;  Due to the calculation above, this number should start big (relatively speaking) and gradually decrease to 1px per interval

			window.scrollTo(0, startingPos);  // Finally, set the window's position equal to the new calculation

		}

}, intervalSetting);  // Set the interval speed according to the value passed in from the function;  Since we are dividing by 30 for all calculations/scrollLength values, adjusting the interval setting is the best way to control the speed of the animation - although dividing by 30 should work relatively well for all scrollLength values.  Still, in some cases you may want a fast or slow scrolling animation dpending on the functionality needed and this is the best way to control that

}
