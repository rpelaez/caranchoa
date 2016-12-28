var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
//s.src = chrome.extension.getURL('jquery.min.js');
s.src = chrome.extension.getURL('caranchoa.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);