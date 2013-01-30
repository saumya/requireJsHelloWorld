/*
(function ($) {
	console.log('init app');
} (jQuery));
*/
/*
//RequireJS
require(["jquery"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
    	console.log('Application initialised ! ');
        console.log($('body'));
    });
});
*/
require(['modules/addModule'],function(addModule){
	console.log(addModule);
});
