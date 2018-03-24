/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/

Crafty.c('Princess', {
    orientation: direction.right,
    steps: 0,
    init: function () {
        this.requires('2D, DOM, Collision, SpriteAnimation, PrincessSprite, Gravity')
        .gravity('Floor')
        .crop(19, 8, 24, 48)
        .reel('walkingLeft', 1200, [[0, 1], [1, 1], [2, 1], [3, 1]])
        .reel('walkingRight', 1200, [[1, 2], [1, 2], [2, 2], [3, 2]])
        .bind('EnterFrame', function () {
            if (this.orientation == direction.right) {
                this.x += 1;
                this.animate('walkingRight', -1);
                this.steps++;
                if (this.steps >= 10) { this.orientation = direction.left; this.steps = 0; }
            }
            else {
                this.x -= 1;
                this.animate('walkingLeft', -1);
                this.steps++
                if (this.steps >= 10) { this.orientation = direction.right; this.steps = 0; }
            }
        });
    }
});
