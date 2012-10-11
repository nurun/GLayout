/**
Copyright : Nurun 2012
This software is released under the LGPL licence.
You are free to use and modify this software without restriction. 
No support will be provided.
**/
/***
* This script modifies the height of the elements in sub category page so they are better aligned.
* The fix is applied in javascript because they are to many variables to take into account to handle 
* everything in css.
* It's meant to be used along with enhance.js from masyl : https://github.com/masyl/enhance.js
*/
GLayout = function(enhancementRoot){
	$(this.elems).each(function(){
		var instance = this;

		var standarizeSelectors = [];
		
		
		standarizeSelectors.push(".fn-adjust-0");
		standarizeSelectors.push(".fn-adjust-1");
		standarizeSelectors.push(".fn-adjust-2");
		standarizeSelectors.push(".fn-adjust-3");
		standarizeSelectors.push(".fn-adjust-4");
		
		var priceLocation;
		
		var getHeightAttibutes = function($elements){
			return $.map($elements,function(el){
				return $(el).height();
			});
		}
		var getPositionTopValues = function($elements){
			return $.map($elements,function(el){
				return $(el).position().top;
			});
		}
		var fixPricePosition = function(){
				$(this).css({marginTop: (priceLocation - $(this).position().top) + "px"});
		}
		var updateLayout = function(isAjax){
			var filter = "";
			if (isAjax){
				//if event type is Ajax, than we only update the boxes that haven't been resized
				filter  = ":not(.fn-adjust-applied)";
			}
			var $lines = $(".fn-adjust-line" + filter ,instance);
			
			$lines.filter(":visible").each(function(){
				$(this).addClass("fn-adjust-applied");
				var $line = $(this);
				var heights = [];
				var $priceTags ;

				for (var i = 0; i < standarizeSelectors.length ; i++ ){
					var $adjustObjects = $(standarizeSelectors[i],$line).filter(":visible");
				
					if ($adjustObjects.length > 0 ){
						$adjustObjects.css({	display : "block",
																minHeight:"1px",//must be set otherwise IE does a miscalculation on page load
																height :"auto"});
				
						heights = getHeightAttibutes($adjustObjects);
						//using .apply so that we call Math.max so each array value is passed has a parameter
						//so Math.max.apply(Math,[10,20,40,32]) is equivalent of Math.max(10,20,40,32);
						$adjustObjects.css("height",Math.max.apply(Math,heights));
						
					}	
				}
				
				
			});

			$(document.documentElement).trigger("layout.update");

		};
		updateLayout();
		
	
	});
};