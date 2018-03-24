/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.scene("GameOver",
    function () {
        $('#loading').show();
        var button = $('.button');
        button.on('click', function () {
            Crafty.scene("Level1");
        });
        Crafty.audio.play("gameover", 1);
    },
    function () {
        Crafty.audio.stop();
        $('#loading').hide();
    }
);


