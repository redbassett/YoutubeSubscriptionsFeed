"use strict";

(function(){
	// This is the path that will be appended to the URL for the subscriptions feed
	let subPath = "feed/subscriptions";

	// Attach listener to YouTube's internal "spfdone" event, called on all page transitions
	document.addEventListener("spfdone", deRecommendify);
	// Attach listener for initial page load, which doesn't trigger spfdone
	document.addEventListener("DOMContentLoaded", deRecommendify);
	
	function deRecommendify() {
		// If URL matches bare YouTube domain without a path, redirect to the subscription feed
		if (/^https?\:\/\/(www\.)?youtube\.com\/$/gm.test(window.location)) {
			window.location += subPath;
		}
		
		// Redirect normal "home" ("/") links to "/#home"
		let results = document.querySelectorAll('a[href="/"]');
		for (var i = 0; i < results.length; i++) {
			results[i].href = "/#home";
		}
		// Point the masthead logo to the subscription path
		document.querySelector('span#yt-masthead-logo-fragment a').href = "/" + subPath;
	}
})();
