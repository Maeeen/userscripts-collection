// ==UserScript==
// @name         Anti-anti-adblock for MyStream
// @version      0.1
// @author       Maeeen
// @match        *.mystream.to/*
// @match        *.mstream.press/*
// @repo         https://github.com/Maeeen/userscripts-collection
// @downloadURL  https://raw.githubusercontent.com/Maeeen/userscripts-collection/master/anti-anti-adblock-mystream.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    const oldOne = document.getElementById


    document.getElementById = function(id) {
        if (id === 'adbdetect')
            return { clientHeight: 1 }
        return oldOne.apply(document, arguments)
    }
})()
