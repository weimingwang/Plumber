/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
var direction = { right: 0, left: 1 };

Crafty.c('Player', {
    orientation: direction.right,
    score: 0,

    init:function(){
        this.requires('2D, DOM, Collision, SpriteAnimation, PlayerSprite, Fourway, Gravity, Background')
        .reel("runningRight", 300, [[0, 0], [1, 0], [2, 0]])
        .reel("runningLeft", 300, [[0, 1], [1, 1], [2, 1]])
        .reel("jumpRight", 1000, [[3, 0], [2, 0]])
        .reel("jumpLeft", 1000, [[3, 1], [2, 1]])
        .reel('win', 1000, [[4, 0], [4, 1]])
        .fourway(4)
        .gravity('Floor')
        .stopOnSolids();

        this.bind('KeyDown', function (e) {
            if (e.key == Crafty.keys.UP_ARROW) {
                Crafty.audio.play("jumpsmall", 1);
                if (this.orientation == direction.left) {
                    this.animate("jumpLeft", 1);
                }
                else {
                    this.animate("jumpRight", 1);
                }
                return;
            }
            if (e.key == Crafty.keys.RIGHT_ARROW) {
                this.orientation = direction.right;
                return;
            }
            if (e.key == Crafty.keys.LEFT_ARROW) {
                this.orientation = direction.left;
                return;
            }
            if (e.key == Crafty.keys.SPACE) {
                this.throwFireball();
            }
        })
        .bind('Moved', function (from) {
            if (this.x + this.w > Crafty.viewport.width ||
                this.x + this.w < this.w) {
                this.attr({ x: from.x, y: from.y });
            }
            else if (this.y + this.h > Crafty.viewport.height) {
              this.killed();
              return;
            }
            else if (this.isPlaying()) {
              return;
            }

            if (this.orientation == direction.left) {
                this.animate('runningLeft', 1);
            } else {
                this.animate('runningRight', 1);
            }
        })
        .bind('Earn', function (score) {
            this.score += score;
            $('.score').text('Score: ' + this.score);
        });
    },
    throwFireball: function () {
        var bx = (this.orientation == direction.right) ? this.x + 15 : this.x - 10;
        var ball = Crafty.e('FireBall').attr({ x: bx, y: this.y + 5 });
        ball.towards(this.orientation);
    },
    stopOnSolids: function () {
        this.onHit('Floor', this.stopMovement);
        this.onHit('Princess', function () {
            this.stopMovement();
            this.animate('win', -1);
            Crafty.trigger("LevelWin");
        });
		this.onHit('Enemy', function(){
			this.killed();
		});
        return this;
    },
    stopMovement: function () {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },
	killed: function(){
		Crafty.trigger("GameOver", 0);
		this.destroy();
	}
});
