(function(root, undefined){
	'use strict';

	console.log('External JS Bookmarklet pulled in.');
	
	var Bookmarklet = {
		//Define vars in here
	};
	
	Bookmarklet.main = function() {
		console.log('bookmarklet main');

	};

	Bookmarklet.init = function(){
		console.log('bookmarklet init');

		if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too  
			script = document.createElement( 'script' );  
			script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';   
		    script.onload = Bookmarklet.main;  
		    document.body.appendChild(script);
		}   
		else {  
		    Bookmarklet.main();
		}
	};

	//Expose it to global
	root.Bookmarklet5982 = Bookmarklet;

	//Self-init
	Bookmarklet.init();

})(this);