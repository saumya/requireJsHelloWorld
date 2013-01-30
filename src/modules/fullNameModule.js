define('modules/fullNameModule',
		['modules/firstNameModule','modules/lastNameModule'],
		function(fn,ln){
			return (fn+' '+ln);
		});
/*
 * define(moduleName,[dependencies Array],function(){ return Object });
 * 
 */