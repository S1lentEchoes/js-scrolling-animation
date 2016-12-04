# js-scrolling-animation

A simple function for scrolling the page.

As I stated in all my other repositories - The first thing that you will probably notice is that it is HEAVILY commented. This was intentional (yes, even to this extreme degree), mostly just for myself. I am still fairly new to coding, and multiple times in the past when I have gone back to some of my previous work I would always have a hard time understanding what my code meant. So along with relentlessly detailing everything that I was doing in the code, I also tried to capture the mindset that I had while I was coding it (or rather, why I coded it the way that I did).

This also has the added benefit of helping to remember this information without the need for comments - sort of like when you write something down to remember it, and the act of writing it down is what helped you remember it. With the only downside being the time taken to write the comments (since minifying removes all of the extraneous content), I saw no reason not to.

This function should be straightforward.  I created this for when I wanted the user to be able to scroll as needed.  For instance, as a scroll down button or for integrating a scroll-to-top functionality (which I frequently add to the top bar of a site).

This requires an initiating function in order to gather all of the parameters needed for a particular instance of the scrolling animation.  This will loop over until the scrollLength reaches 0.

It will divide the scrollLength by 30 upon each loop, round that value up to the nearest integer, and scroll the page by that amount.  I found 30 to be a good value for working with both large and small scrollLength values (i.e. at 2100px only 70px scrolling will be called, while at 100px only 3px will be called).  This has the nice effect of scrolling fast at high scrollLength values and slowing down as it reaches 0, so that the scrolling is not "jarring" to the user.  Since rounding up is done, even at 30 and below, no other checks are needed as this value will eventually reach 0 and exit out of the loop.

I wanted to integrate this with my css-animation function (which can be found here - https://github.com/S1lentEchoes/js-css-animation ), but adding the second operation functionality made it more complex than I wanted.  Plus, it would still need the rounding up integration as well, further complicating it.  Keeping them separate makes them both simple and concise, so I decided to just keep them separate.

I think that about covers it, any more code explanations that may be needed can easily be found inside the file's comments. I have included both the normal version, and the minified version.
