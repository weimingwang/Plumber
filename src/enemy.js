/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.c('Enemy', {
    playerID: null,
	hp: 1,
    points: 1,
    
	init: function () {
        this.requires('2D, DOM, SpriteAnimation, enemySprite, Collision, Gravity')
            .onHit('Bullet', function (ent) {
                var bullet = ent[0].obj;
                this.playerID = bullet.playerID;
                this.trigger('hurt', bullet.damage);
                bullet.destroy();
            })
            .bind('hurt', function (damage) {
                this.hp -= damage;
                if (this.hp <= 0) this.trigger('Die');
            })
            .bind('Die', function () {
                Crafty(this.playerID).trigger('kills', this.points);
                this.destroy();
            });

        this.gravity('Floor');
    }
});
Crafty.c('Koopa', {
    leftBound: null,
    rightBound: null,
    orientation: direction.right,
    init: function () {
        this.requires('Enemy, SpriteAnimation, koopaSprite')
        .reel('walkingLeft', 500, [[0, 0], [1, 1], [0, 0], [0, 2]])
        .reel('walkingRight', 500, [[1, 0], [1, 1], [1, 0], [1, 2]]);
    },
    showAt: function (left, right, x, y, dir) {
        this.leftBound = left;
        this.rightBound = right;
        this.x = x;
        this.y = y;
        this.directon = dir;

        this.bind("EnterFrame", this.patrol);
    },
    patrol: function () {
        if (this.orientation == direction.right) {
            this.x += 1;
        } else {
            this.x -= 1;
        }
        if (this.x > this.rightBound) {
            this.orientation = direction.left;
            this.animate('walkingLeft', 1);
        } else if (this.x < this.leftBound) {
            this.orientation = direction.right;
			this.animate('walkingRight', 1);
        }
    }
});

