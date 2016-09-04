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
	$(document).ready(moveDiscountItemUp);
}
function moveDiscountItemUp() {
	// console.log("discount counts: " + $('div.discount_prices').length);
	// console.log("discount parent counts: " + $('div.discount_prices').closest('div.wishlistRow').length);
	// get the first game in list
	var first = $('div.wishlistRow').first();
	// unshift the discount one
	var discountList = $('div.discount_prices').closest('div.wishlistRow');
	first.before(discountList);
	discountList.css({
		background-color: #00ff00,
		border: 5px solid #33ff33
	});
}

main();
