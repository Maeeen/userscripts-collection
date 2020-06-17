// ==UserScript==
// @name         Disable seen events on Instagram Desktop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables the "seen" event in the DMs on Instagram Desktop
// @downloadURL  https://raw.githubusercontent.com/Maeeen/userscripts-collection/master/disable-seen-instagram-dms.user.js
// @author       Maeeen
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const oldOpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function(type, url) {
        if (url.indexOf('/seen/') > -1)
            this.send = () => {}
        oldOpen.apply(this, arguments)
    }
})();
