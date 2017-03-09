"use strict";

(function(){
	document.addEventListener('click', function() {
		deRecommendify();
	})
	
	function deRecommendify() {
		if (/^https?\:\/\/(www\.)?youtube\.com\/$/gm.test(window.location)) {
			window.location += "feed/subscriptions";
		}
	}
	
	deRecommendify();
})();
