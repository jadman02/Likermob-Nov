/*
 * Framework7 3D Panels 0.9.5
 * Framework7 plugin to add 3d effect for side panels
 *
 * http://www.idangero.us/framework7/
 *
 * Copyright 2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 2, 2014
*/
Framework7.prototype.plugins.panels3d=function(a,b){"use strict";function c(){b.enabled&&l.css({"-webkit-transform-origin":"100% center","transform-origin":"100% center"})}function d(){b.enabled&&l.css({"-webkit-transform-origin":"0% center","transform-origin":"0% center"})}function e(){l=g(".views"),j=g(".panel-left.panel-reveal"),k=g(".panel-right.panel-reveal"),j.on("open",c),k.on("open",d)}function f(a,c,d){b.enabled&&(c=g(c),c.hasClass("panel-reveal")&&(c.hasClass("panel-left")&&(h||(h=c[0].offsetWidth),l.transform("translate3d("+h*d+"px,0,0) rotateY("+-30*d+"deg)"),l.css({"-webkit-transform-origin":"100% center","transform-origin":"100% center"}),c.transform("translate3d("+-h*(1-d)+"px,0,0)")),c.hasClass("panel-right")&&(i||(i=c[0].offsetWidth),l.transform("translate3d("+-i*d+"px,0,0) rotateY("+30*d+"deg)"),l.css({"-webkit-transform-origin":"0% center","transform-origin":"0% center"}),c.transform("translate3d("+i*(1-d)+"px,0,0)"))))}b=b||{enabled:!0};var g=window.Dom7;a.panels3d={enable:function(){g("body").addClass("panels-3d"),b.enabled=!0},disable:function(){g("body").removeClass("panels-3d"),b.enabled=!1}},b.enabled&&g("body").addClass("panels-3d");var h,i,j,k,l;return{hooks:{appInit:e,swipePanelSetTransform:f}}};
