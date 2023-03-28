// ==UserScript==
// @name        Anti Ukraine
// @description Hide that disgusting Ukraine themed logo.
// @namespace   Violentmonkey Scripts
// @match       https://v3rmillion.net/index.php
// @match       https://v3rmillion.net/forumdisplay.php
// @grant       none
// @version     1.0
// @author      Spencer-0003
// ==/UserScript==

const div = document.getElementById('logo');
div.outerHTML = div.outerHTML.replace('__ukraine', '');
