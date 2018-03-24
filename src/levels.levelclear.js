/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.scene("LevelClear", function (text) {
    $('#loading').show();
    Crafty.audio.play("win", -1);
},
function () {
    Crafty.audio.stop();
    $('#loading').hide();
});