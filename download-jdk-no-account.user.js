// ==UserScript==
// @name         Download JDK without account
// @run-at       document-end
// @version      0.1
// @description  Download Java developer files without needing to login!
// @author       Maeeen
// @repo         https://github.com/Maeeen/userscripts-collection
// @downloadURL  https://raw.githubusercontent.com/Maeeen/userscripts-collection/master/download-jdk-no-account.user.js
// @grant        none
// @match        https://www.oracle.com/*
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('a.license-link').forEach(anchor => {
        const attr = anchor.getAttribute('data-file')
        if (!attr)
            return

        anchor.addEventListener('click', () => {
            window.open(attr.replace('otn', 'otn-pub'))
        })
    })
})();
