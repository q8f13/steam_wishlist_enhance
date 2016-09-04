// ==UserScript==
// @name        wishlistFilter
// @namespace   dustfall@gmail.com
// @include     http://steamcommunity.com/id/*/wishlist
// @exclude
// @version     1
// @grant       none
// @require  https://code.jquery.com/jquery-3.1.0.min.js
// ==/UserScript==
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function main() {
	// Note, jQ replaces $ to avoid conflicts.
	// alert("There are " + jQ('a').length + " links on this page.");
	$(document).ready(showNumber);
}
function showNumber() {
	// alert('total is ' + $('.wishlistRow').length);
	console.log("discount counts: " + $('div.discount_prices').length);
	console.log("discount parent counts: " + $('div.discount_prices').closest('div.wishlistRow').length);
	var first = $('div.wishlistRow').first();
	first.before($('div.discount_prices').closest('div.wishlistRow'));
}// load jQuery and execute the main function


// addJQuery(main);
main();
