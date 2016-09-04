// ==UserScript==
// @name        wishlistFilter
// @namespace   dustfall@gmail.com
// @include     http://steamcommunity.com/id/*/wishlist
// @exclude
// @version     1
// @description	find out games in your wishlist which are on sale and pin them top with highlight
// @grant       none
// @require  https://code.jquery.com/jquery-3.1.0.min.js
// ==/UserScript==
function main() {
	$(document).ready(moveDiscountItemUp);
}
function moveDiscountItemUp() {
	// get the first game in list
	var first = $('div.wishlistRow').first();
	// unshift the discount one
	var discountList = $('div.discount_prices').closest('div.wishlistRow');
	first.before(discountList);
	// highlight them
	discountList.css('border', '3px solid #4c6b22');
}

main();
