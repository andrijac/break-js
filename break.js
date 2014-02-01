
var __break = (function() {
	"use strict";
	
	// as we need to keep original functions, we will use clousers to keep a original functions here.
	var cache = {},
		cArray = function(args) { return Array.prototype.slice.call(args); },
		concat = function() { return cArray(arguments).join(""); };				
		
	// funcName - name of the function, full name accessable from global object.
	// removeBreakpoint - use it only when you want to remove a breakpoint, set it to any truthful value.
	return function(funcName, removeBreakpoint) {
		
		// get pointer to original function
		var original = (new Function(concat("return ", funcName, ";")))(),
			// compile override function
			override = new Function("overrideFunc", concat(funcName , " = overrideFunc;"));					
			
		// check removeBreakpoint flag if it is true.        
		if(!!removeBreakpoint) {
			// restore original function
			override(cache[funcName]);
			// remove from cached collection
			delete cache[funcName];
			return;
		}
 
		// if function is already overriden, exit
		if(!!cache[funcName]) {
			return;
		}
		
		// cache original function
		cache[funcName] = original;				
		
		// override original function
		override(function () {
			var args = cArray(arguments);
			debugger;
			return original.apply(this, args);
		});
	};
}());

if(!console.break) {
  console.break = __break;
}