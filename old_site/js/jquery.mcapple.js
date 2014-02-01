(function($){   
 $.fn.McApple = function(options) {     
 	options = $.extend({		
		title: 'Window',
		height: false,
		width: false,
		left: 0,
		top: 0,
		minimizeto: false,
		maxheightadder: 0,
		maxwidthadder: 0,
		maximizesize: {width: false, height: false},
		resize: function() {},
		parentwindow: window
	}, options);		
    return this.each(function() { 
        	    
    	this.mywindow = {
    		winoptions: $.extend({height: $(this).height(), width: $(this).width()}, options),
    		topBar: $("<div class='-mcapple-topbar'></div>")[0],
    		titleLabel: $("<div class='-mcapple-name'><label>"+options.title+"</label></div>")[0],
    		controls: $("<div class='-mcapple-windowcontrols'></div>")[0],
    		minimizeButton: $("<div class='-mcapple-minimize'/>")[0],
    		maximizeButton: $("<div class='-mcapple-maximize' />")[0],
    		closeButton: $("<div class='-mcapple-close' />")[0],
    		windowContainer: $("<div id='-mcapple-" + this.id + "' class='-mcapple' style='position: absolute; left: "+options.left+"; top: "+options.top+";'></div>")[0],
    		windowContents: $("<div class='-mcapple-contents'></div>")[0],    
		actual: this,
		maximized: false,		
		prevdims: {width: options.width, height: options.height, pos: {left: options.left, top: options.top}},
		_init: function()
		{    				
			$(this.topBar).append(this.titleLabel).append(this.controls);
			$(this.controls).append(this.minimizeButton).append(this.maximizeButton).append(this.closeButton);			
			$(this.windowContainer).append(this.topBar).append(this.windowContents);			
			$(this.actual).before(this.windowContainer);
			$(this.windowContents).append(this.actual);			
			$(this.windowContents).css({height: this.winoptions.height>4?this.winoptions.height:4, width: this.winoptions.width>58?this.winoptions.width:58});
			$(this.windowContainer).css({height: this.winoptions.height>4?this.winoptions.height+28:32, width: this.winoptions.width>58?this.winoptions.width+2:60});
			$(this.windowContainer).draggable({handle: '.-mcapple-topbar'}).resizable({handles: "all", alsoResize: "#"+this.windowContainer.id + " .-mcapple-contents:first", minWidth: 60, minHeight: 32, resize: function(){$('.-mcapple-contents', $(this)).trigger("resize")}});    	    	    					
			$(this.windowContents).resize(options.resize);
									
			this.minimizeButton.winobj = this.actual;
			this.maximizeButton.winobj = this.actual;
			this.closeButton.winobj = this.actual;
			this.topBar.winobj = this.actual;
			this.windowContents.winobj = this.actual;
			this.windowContainer.winobj = this.actual;
			
			if(this.winoptions.minimizeto)
			{			    
				$(this.winoptions.minimizeto)[0].winobj = this.actual;
				$(this.winoptions.minimizeto).click(function()
				{
					this.winobj.mywindow.toggleWindow();
				});
			}	
						
			$(this.topBar).dblclick(function(){$(this.winobj.mywindow.maximizeButton).trigger("click")});			
			$(this.minimizeButton).click(function(){this.winobj.mywindow.minimizeWindow();});						
			$(this.maximizeButton).click(function()
			{
				if(this.winobj.mywindow.maximized)
				{
					this.winobj.mywindow.restoreWindow();					
				}
				else
				{	
					this.winobj.mywindow.maximizeWindow();
				}								
			});			
			$(this.closeButton).click(function(){this.winobj.mywindow.closeWindow();});				
			
			$(this.windowContainer).click(function()
			{			
			      if($(this).parent().children(":last")[0] != this)
			      {
			      	$(this).parent().append(this);
			      }      				    
			});
			$(this.windowContents).trigger("resize");						
		},
		fixDims: function(dims)
		{
			if(dims)
			{
				if(!this.maximized)
				{
					this.prevdims.width = $(this.windowContents).width();
					this.prevdims.height = $(this.windowContents).height();
				}	
				if(dims.height)
				{
					$(this.windowContents).css({height: dims.height>4?dims.height:4});
					$(this.windowContainer).css({height: dims.height>4?dims.height+28:32});				
				}

				if(dims.width)
				{
					$(this.windowContents).css({width: dims.width>58?dims.width:58}); 
					$(this.windowContainer).css({width: dims.width>58?dims.width+2:60});
				}	
				
				this.fireResize();				
			}
		},   
		fixPos: function(pos)
		{
			if(pos)
			{			
				this.prevdims.pos.left = $(this.windowContainer).css("left");
				this.prevdims.pos.top = $(this.windowContainer).css("top");
				if(pos.left)
				{
					$(this.windowContainer).css({left: pos.left});
				}
				if(pos.top)
				{
					$(this.windowContainer).css({top: pos.top});
				}				
			}
		},
		maximizeWindow: function()
		{
			var winheight = $(this.winoptions.parentwindow).height()-38+this.winoptions.maxheightadder;	
			var winwidth = $(this.winoptions.parentwindow).width()-12+this.winoptions.maxwidthadder;
			
			
			
			if(this.winoptions.parentwindow != window)
			{			    			    
			    winwidth -= 2;
			}
			
			
			if(this.winoptions.maximizesize.width && this.winoptions.maximizesize.width < winwidth)
			{
				winwidth = this.winoptions.maximizesize.width;
			}
			if(this.winoptions.maximizesize.height && this.winoptions.maximizesize.height < winheight)
			{
				winheight = this.winoptions.maximizesize.height;
			}
			
			this.prevdims.width = $(this.windowContents).width();
			this.prevdims.height = $(this.windowContents).height();
			this.prevdims.pos.left = $(this.windowContainer).css("left");
			this.prevdims.pos.top = $(this.windowContainer).css("top");

			$(this.windowContents).animate({height: winheight>4?winheight:4, width: winwidth>58?winwidth:58}, {complete: function(){$(this).trigger("resize");}, duration: 1500});
			$(this.windowContainer).animate({height: winheight>4?winheight+28:32, width: winwidth>58?winwidth+2:60, left: this.winoptions.parentwindow!=window?6:0, top: this.winoptions.parentwindow!=window?31:0}, {duration: 1500});
			
			this.maximized = true;
			
		},
		restoreWindow: function()
		{			
			if(!$(this.windowContainer).is(':visible'))
			{									
				$(this.windowContainer).show("slow", function(){$(this.winobj.mywindow.windowContents).trigger("resize");});
				var winheight = $(this.winoptions.parentwindow).height()-38+this.winoptions.maxheightadder;	
			    var winwidth = $(this.winoptions.parentwindow).width()-12+this.winoptions.maxwidthadder;				
				var myoff = {top: parseInt($(this.windowContainer).css("top")), left: parseInt($(this.windowContainer).css("left"))};
				if(myoff.top < 0 || myoff.top > winheight)
				{				    
				    $(this.windowContainer).css({top: 0});
				}							
				if(myoff.left < 0 || myoff.left > winwidth)
				{				    
				    $(this.windowContainer).css({left: 0});
				}
			}			
			else
			{
				var winheight = this.prevdims.height;
				var winwidth = this.prevdims.width;
				var winleft = this.prevdims.pos.left;
				var wintop = this.prevdims.pos.top;

				$(this.windowContents).animate({height: winheight>4?winheight:4, width: winwidth>58?winwidth:58}, {complete: function(){$(this).trigger("resize");}, duration: 1500});
				$(this.windowContainer).animate({height: winheight>4?winheight+28:32, width: winwidth>58?winwidth+2:60, left: winleft, top: wintop}, {duration: 1500});
				this.maximized = false;
			}				
			$(this.windowContainer).trigger("click");
		},
		minimizeWindow: function()
		{			
			if(!this.maximized)
			{
				this.prevdims.width = $(this.windowContents).width();
				this.prevdims.height = $(this.windowContents).height();
				this.prevdims.pos.left = $(this.windowContainer).css("left");
				this.prevdims.pos.top = $(this.windowContainer).css("top");
			}	
			
			if(this.winoptions.minimizeto)
			{             
				if(!$(this.windowContainer).parents().hasClass("-mcapple"))
				{
					$(this.windowContainer).hide();      					
      					$(this.windowContainer).effect("transfer", { to: this.winoptions.minimizeto }, 1000);      			      		      			      				      				
      				}
      				else
      				{
      					$(this.windowContainer).hide("slow");      					
      				}
      			}	      			
      			else
      			{
      				$(this.windowContainer).hide("slow");
      			}      			
      			
      		},      		
		closeWindow: function()
		{
			$(this.windowContainer).hide("slow");
		},
		toggleWindow: function()
		{
		    if(!$(this.windowContainer).is(':visible'))
			{								
				this.restoreWindow();
			}
			else
			{
				this.minimizeWindow();
			}
		},
		fireResize: function()
		{    		
			$(this.windowContents).resize();			
		}	    		
    	};
    	    	    	    	    
    	this.mywindow._init();	    	
    });  
 }; 
})(jQuery);