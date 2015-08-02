'use strict';

chrome.webRequest.onBeforeRequest.addListener(function(request) {
    var url = request.url
        .replace('googleapis.com', 'lug.ustc.edu.cn')
        .replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn')
        .replace(/(www|\d).gravatar.com/, 'cdn.v2ex.com');
    return {
        redirectUrl: url
    };
},
    {
        urls: [
            '*://ajax.googleapis.com/*',
            '*://fonts.googleapis.com/*',
            '*://themes.googleusercontent.com/*',
            '*://*.gravatar.com/*'
        ]
    },
    ['blocking']
);
