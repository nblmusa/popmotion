/*
    DOM CSS route
    ==============================================
*/
"use strict";

var build = require('./css/build'),
    styleDom = require('./css/style-dom'),
    typeMap = require('./css/type-lookup'),
    CSS_CACHE = '_cssCache';

module.exports = {
    typeMap: typeMap,
    
    onChange: function (output) {
        actor[CSS_CACHE] = actor[CSS_CACHE] || {};
        this.css(build(output, actor[CSS_CACHE]));
    },

    get: function (key) {
        return styleDom(this.element, key);
    },

    set: function (key, value) {
        styleDom(this.element, key, value);
    }
    
};