(function($){   
 $.fn.McDesktop = function(options) {     
 	options = $.extend({		
		background: false,
		desktopicons: [],                        /* {icon: [image], caption: [caption], click: [function]}*/
		startmenu: {leftcol: [], rightcol: []},  /* {icon: [image], caption: [caption], click: [function]}*/		
		toolbaritems: [],                         /* {icon: [image], caption: [caption], class: [class], hide: [boolean]}*/		
		iconheight: 80,
		iconwidth: 110,
		numicons: 5,
		onSuccess: false
	}, options);		
    return this.each(function() {  
    	this.mydesktop = {
    		actual: this,
		options: options,    		
		toolbar: $("<div class='-desktop-toolbar'></div>")[0],
		startbutton: $("<div class='-desktop-startbutton'></div>")[0],
		startmenu: $("<div class='-desktop-startbutton-popup'></div>")[0],
		menuleftcol: $("<div class='-desktop-startbutton-popup-leftcol'></div>")[0],
		menurightcol: $("<div class='-desktop-startbutton-popup-rightcol'></div>")[0],
    		desktopicons: [],
    		startmenucols: {leftcol: [], rightcol: []},
    		toolbaritems: []
    	};    
    	    	    	    	    	
    	$(this).append(this.mydesktop.toolbar);
    	$(this.mydesktop.toolbar).append(this.mydesktop.startbutton);
    	$(this.mydesktop.startbutton).append(this.mydesktop.startmenu);
    	$(this.mydesktop.startmenu).append(this.mydesktop.menuleftcol).append(this.mydesktop.menurightcol);
    	$(this.mydesktop.startbutton).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
    	var i = 0;
    	var curheightcounter = 0;
    	
    	for(i = 0; i < options.desktopicons.length; i++)
    	{    		
    		this.mydesktop.desktopicons[i] = $("<div class='-desktop-icon'>" + options.desktopicons[i].caption + "</div>")[0];
    		$(this).append(this.mydesktop.desktopicons[i]);
    		curheightcounter = curheightcounter + 1;
    		    		
    		if((i%options.numicons) == 0)
    		{    			    			
    			curheightcounter = 0;
    		}
    		$(this.mydesktop.desktopicons[i]).css({top: (curheightcounter*options.iconheight), left: Math.floor(i/options.numicons)*options.iconwidth});       		    						   			
		
    		if(options.desktopicons[i].icon)
    		{
    			$(this.mydesktop.desktopicons[i]).css({backgroundImage: "url(" + options.desktopicons[i].icon + ")"}); 
    		}
    		if(options.desktopicons[i].click)
		{
			$(this.mydesktop.desktopicons[i]).click(options.desktopicons[i].click);
		}
		if(options.desktopicons[i].itemclass)
		{
			$(this.mydesktop.desktopicons[i]).addClass(options.desktopicons[i].itemclass);
		}
		
		$(this.mydesktop.desktopicons[i]).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
    	}
    	
    	if(options.startmenu.leftcol)
    	{
		for(i = 0; i < options.startmenu.leftcol.length; i++)
		{
			this.mydesktop.startmenucols.leftcol[i] = $("<div class='-desktop-startbutton-popup-leftcol-item'>" + options.startmenu.leftcol[i].caption + "</div>")[0];			
			$(this.mydesktop.menuleftcol).append(this.mydesktop.startmenucols.leftcol[i]);
			
			if(i%2 == 1)
			{
				$(this.mydesktop.startmenucols.leftcol[i]).addClass("startmenu-leftcolodd");
			}
			if(options.startmenu.leftcol[i].click)
			{
				$(this.mydesktop.startmenucols.leftcol[i]).click(options.startmenu.leftcol[i].click);
			}
			if(options.startmenu.leftcol[i].icon)
			{
				$(this.mydesktop.startmenucols.leftcol[i]).css({backgroundImage: "url(" + options.startmenu.leftcol[i].icon + ")"});       		    					
			}
			if(options.startmenu.leftcol[i].itemclass)
			{
				$(this.mydesktop.startmenucols.leftcol[i]).addClass(options.startmenu.leftcol[i].itemclass);
			}
			$(this.mydesktop.startmenucols.leftcol[i]).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
		}
	}
	
	if(options.startmenu.rightcol)
    	{
		for(i = 0; i < options.startmenu.rightcol.length; i++)
		{
			this.mydesktop.startmenucols.rightcol[i] = $("<div class='-desktop-startbutton-popup-rightcol-item'>" + options.startmenu.rightcol[i].caption + "</div>")[0];			
			$(this.mydesktop.menurightcol).append(this.mydesktop.startmenucols.rightcol[i]);
			if(i%2 == 1)
			{
				$(this.mydesktop.startmenucols.rightcol[i]).addClass("startmenu-rightcolodd");
			}
			if(options.startmenu.rightcol[i].icon)
			{
				$(this.mydesktop.startmenucols.rightcol[i]).css({backgroundImage: "url(" + options.startmenu.rightcol[i].icon + ")"});       		    		
			}	
			if(options.startmenu.rightcol[i].click)
			{
				$(this.mydesktop.startmenucols.rightcol[i]).click(options.startmenu.rightcol[i].click);
			}
			if(options.startmenu.rightcol[i].itemclass)
			{
				$(this.mydesktop.startmenucols.rightcol[i]).addClass(options.startmenu.rightcol[i].itemclass);
			}
			$(this.mydesktop.startmenucols.rightcol[i]).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
		}
	}
	
	for(i = 0; i < options.toolbaritems.length; i++)
	{
		this.mydesktop.toolbaritems[i] = $("<div class='-desktop-item'></div>")[0];
		$(this.mydesktop.toolbaritems[i]).append($("<div class='-desktop-item-left'></div>")[0]);
		$(this.mydesktop.toolbaritems[i]).append($("<div class='-desktop-item-middle'><div class='-desktop-item-middle-inner'>" + options.toolbaritems[i].caption + "</div></div>")[0]);
		$(this.mydesktop.toolbaritems[i]).append($("<div class='-desktop-item-right'></div>")[0]);
		$(this.mydesktop.toolbar).append(this.mydesktop.toolbaritems[i]);
		
		if(options.toolbaritems[i].click)
		{
			$(this.mydesktop.toolbaritems[i]).click(options.toolbaritems[i].click);			
		}
				
		if(options.toolbaritems[i].hide)
		{
			$(this.mydesktop.toolbaritems[i]).css({display: "none"});
		}
		else
		{
			$(".-desktop-item-left", this.mydesktop.toolbaritems[i]).addClass("-desktop-item-left-active");
			$(".-desktop-item-middle", this.mydesktop.toolbaritems[i]).addClass("-desktop-item-middle-active");
			$(".-desktop-item-right", this.mydesktop.toolbaritems[i]).addClass("-desktop-item-right-active");
		}
		
		if(options.toolbaritems[i].icon)
		{
			$('.-desktop-item-middle-inner', this.mydesktop.toolbaritems[i]).css({backgroundImage: "url(" + options.toolbaritems[i].icon + ")"});
		}	
		
		$(this.mydesktop.toolbaritems[i]).attr("title", options.toolbaritems[i].caption);
		
		this.mydesktop.toolbaritems.desktopobj = this.mydesktop;
		
		if(options.toolbaritems[i].itemclass)
		{			
			$(this.mydesktop.toolbaritems[i]).addClass(options.toolbaritems[i].itemclass);
		}			
	}
	if(options.onSuccess)
	{
	    options.onSuccess();
	}
    });  
 }; 
})(jQuery);