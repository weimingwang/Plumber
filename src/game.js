/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
$(function(){
    //Init Crafty
    Crafty.init(__stageWidth, __stageHeight);
    //Add Canvas Element
    Crafty.canvas.init();
    //Set canvas under interface
    Crafty.canvas._canvas.style.zIndex = '1';
    
    //play the loading scene
    Crafty.scene("Loading");
});