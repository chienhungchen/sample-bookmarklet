(function(root, undefined){
	'use strict';

	console.log('External JS Bookmarklet pulled in.');
	
	var Bookmarklet = {
		//Define vars in here
	};
	
	Bookmarklet.run = function() {
		console.log('bookmarklet run');

	};

	Bookmarklet.init = function(){
		console.log('bookmarklet init');

		if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too  
			script = document.createElement( 'script' );  
			script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';   
		    script.onload = Bookmarklet.run;  
		    document.body.appendChild(script);
		}   
		else {  
		    Bookmarklet.run();
		}
	};

	//Expose it to global
	root.Bookmarklet5982 = Bookmarklet;

	//Self-init
	Bookmarklet.init();

})(this);