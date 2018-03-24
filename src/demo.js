/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
      
	  Crafty.init(500,350, $("#game").get(0));
	  
	  Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 0, y: 250, w: 250, h: 10})
		.color('green');
		
      Crafty.e('2D, Canvas, Color, Fourway, Gravity')
	  .attr({x: 0, y: 0, w: 100, h: 100})
	  .color('#F00')
	  .fourway(4)
	  .gravity('Floor');