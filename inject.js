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
		
		// Redirect the "Home" button at the top of the feed to the actual home, bypassing the check
		// above by using a fragment. This allows users to still access the normal home manually.
		// The try here is to suppress errors when the button isn't on screen.
		try {document.querySelectorAll('div#appbar-content li a')[0].href = "/#home";} catch(e) {}
		// Point the masthead logo to the subscription path
		document.querySelector('span#yt-masthead-logo-fragment a').href = "/" + subPath;
	}
})();
