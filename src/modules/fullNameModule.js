define('modules/fullNameModule',
		['modules/firstNameModule','modules/lastNameModule'],
		function(){
			return function(f,l){
				return (f+' '+l);
			};
		});
/*
 * define(moduleName,[dependencies Array],function(){ return Object });
 * 
 */