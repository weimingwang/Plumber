/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
//setup envrionmental variables
var __gamePath = location.href.lastIndexOf("/") !== -1 ?
                location.href.substring(0, location.href.lastIndexOf("/") + 1) :
                location.href;
var __stageWidth = 600;
var __stageHeight = 500;