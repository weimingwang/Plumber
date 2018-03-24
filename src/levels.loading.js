/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.scene("Loading",function(){

    //Setup background image
	$('#interface').hide();
    Crafty.background("url("+__gamePath+"assets/img/loading.png) white no-repeat center center");

	//Setup progressbar
    var bar = $('#load');
    var button = $('.button');
    var text = bar.find('.text');
    
    text.text("Loading ...");
    bar.progressbar({ value: 0 });
    button.on('click', function () {
        Crafty.scene("Level1"); 
    });
	
	var toLoad = [];
    toLoad.push(__gamePath + "assets/img/loading.png", __gamePath + "assets/img/bg-cloud.png");
    for(var i in Crafty.assets){
        toLoad.push(i);
    }
    Crafty.load(toLoad,
        function() {
            //Everything is loaded
            bar.fadeOut(1000,function(){
                button.show();
            });
            
        },
        function(e) {
            var src = e.src ||"";
			
            //update progress
            text.text(
				"Loading " +
				src.substr(src.lastIndexOf('/') + 1).toLowerCase()+
				" Loaded: " +
				~~e.percent + "%");
            bar.progressbar({
                value:~~e.percent
            });
        },
        function(e) {
            //uh oh, error loading
            var src = e.src || "";
            console.log(
				"Error on loading: " +
				src.substr(src.lastIndexOf('/') + 1).toLowerCase());
        }
        );
    Crafty.audio.play("intro",-1);
},
function(){
    Crafty.audio.stop();
    $('#loading').hide();
});