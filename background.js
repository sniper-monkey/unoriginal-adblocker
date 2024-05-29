chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel:true}},
    {urls: ['*://.zedo.com*']},
    {urls: ["*://*.doubleclick.net/*"]},
	{urls: ["*://partner.googleadservices.com/*"]},
	{urls: ["*://*.googlesyndication.com/*"]},
	{urls: ["*://*.google-analytics.com/*"]},
	{urls: ["*://creative.ak.fbcdn.net/*"]},
	{urls: ["*://*.adbrite.com/*"]},
	{urls: ["*://*.exponential.com/*"]},
	{urls: ["*://*.quantserve.com/*"]},
	{urls: ["*://*.scorecardresearch.com/*"]},
	{urls: ["*://*.zedo.com/*"]}
["blocking"]
)
