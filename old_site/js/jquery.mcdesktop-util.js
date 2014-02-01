$(document).ready(function()
{    
    $('body').McDesktop({desktopicons: [
                                {icon: 'images/globencog.png', caption: 'Welcome!', click: function()
								{
									windowbutton('#greetingwindow');
								}},							
								{icon: 'images/globencog.png', caption: 'Background', click: function()
								{
									windowbutton('#backgroundwindow');
								}},
								{icon: 'images/globencog.png', caption: 'Videos', click: function()
								{
									windowbutton('#youtubewindow');
								}},
								{icon: 'images/globencog.png', caption: 'Sleep Support', click: function()
								{
									windowbutton('#sleepsupportwindow');
								}}
								],
								
						startmenu: {
							rightcol: [
								{icon: 'images/globencogicon.png', caption: 'Welcome!', click: function()
								{
									windowbutton('#greetingwindow');
								}},				
								{icon: 'images/globencogicon.png', caption: 'Background', click: function()
								{
									windowbutton('#backgroundwindow');
								}},
								{icon: 'images/globencogicon.png', caption: 'Sleep Support', click: function()
								{
									windowbutton('#sleepsupportwindow');
								}}
								],
							leftcol: [
								{icon: 'images/globencogicon.png', caption: 'Welcome!', click: function()
								{
									windowbutton('#greetingwindow');
								}},				
								{icon: 'images/globencogicon.png', caption: 'Background', click: function()
								{
									windowbutton('#backgroundwindow');
								}},
								{icon: 'images/globencogicon.png', caption: 'Videos', click: function()
								{
									windowbutton('#sleepsupportwindow');
								}}
								]	
							   },
						toolbaritems: [
							{caption: 'Welcome!', icon: 'images/globencogicon.png', hide: false, itemclass: 'greetingwindowtoolbaricon', click: function()
							{
								windowtoolbarbutton('#greetingwindow');
							}},
							{caption: 'Background', icon: 'images/globencogicon.png', hide: true, itemclass: 'backgroundtoolbaricon', click: function()
							{
								windowtoolbarbutton('#backgroundwindow');
							}},
							{caption: 'Videos', icon: 'images/globencogicon.png', hide: true, itemclass: 'youtubewindowtoolbaricon', click: function()
							{
								windowtoolbarbutton('#youtubewindow');
							}},
							{caption: 'Sleep Support', icon: 'images/globencogicon.png', hide: true, itemclass: 'sleepsupportwindowtoolbaricon', click: function()
							{
								windowtoolbarbutton('#sleepsupportwindow');
							}}
							], 
						onSuccess: function()
							{							
								windowsetup({wi: 'backgroundwindow', ts: '.backgroundtoolbaricon', t: 'Background'});
								windowsetup({wi: 'greetingwindow', ts: '.greetingwindowtoolbaricon', t: 'Welcome!'});
								windowsetup({wi: 'youtubewindow', ts: '.youtubewindowtoolbaricon', t: 'Videos'});
								windowsetup({wi: 'sleepsupportwindow', ts: '.sleepsupportwindowtoolbaricon', t: 'Sleep Support'});
								$($('#backgroundwindow')[0].mywindow.windowContainer).hide();
								$($('#greetingwindow')[0].mywindow.windowContainer).hide();
								$($('#youtubewindow')[0].mywindow.windowContainer).hide();		
								$($('#sleepsupportwindow')[0].mywindow.windowContainer).hide();	
								$($('#sleepsupportwindow')[0].mywindow.windowContainer).show("slow");
							}});			        
});

function windowsetup(options)
{	
	options = $.extend(
	{
		wi: "tempid",
		ts: false,
		t: "I need a title.",
		ty: "div",
		rs: function() {},			
		width: 600,
		height: 400,
		top: 150,
		left: 150,
		maximizesize: {width: false, height: false}
	}, options);	
	
	$("#"+options.wi).McApple({minimizeto: options.ts, maxheightadder: -29, title: options.t, width: options.width, height: options.height, top: options.top, left: options.left, maximizesize: options.maximizesize, resize: options.rs});		
	
	$($("#"+options.wi)[0].mywindow.closeButton).click(function()
	{
		$(options.ts).hide();
	});
	$($("#"+options.wi)[0].mywindow.minimizeButton).click(function()
	{
		$(options.ts + ' .-desktop-item-left').removeClass('-desktop-item-left-active');
		$(options.ts + ' .-desktop-item-middle').removeClass('-desktop-item-middle-active');
		$(options.ts + ' .-desktop-item-right').removeClass('-desktop-item-right-active');
	});	
}

function windowbutton(windowselector)
{		
	if(!$($(windowselector)[0].mywindow.windowContainer).is(':visible'))
	{
		var toolbaritemselector = $(windowselector)[0].mywindow.winoptions.minimizeto;
		$(windowselector)[0].mywindow.restoreWindow();
		$(toolbaritemselector).show();
		$(toolbaritemselector + ' .-desktop-item-left').addClass('-desktop-item-left-active');
		$(toolbaritemselector + ' .-desktop-item-middle').addClass('-desktop-item-middle-active');
		$(toolbaritemselector + ' .-desktop-item-right').addClass('-desktop-item-right-active');
	}
	else
	{
		$($(windowselector)[0].mywindow.minimizeButton).trigger('click');
	}				
}

function windowtoolbarbutton(windowselector)
{	    
	var toolbaritemselector = $(windowselector)[0].mywindow.winoptions.minimizeto;
	if(!$($(windowselector)[0].mywindow.windowContainer).is(':visible'))
	{
		$(toolbaritemselector + ' .-desktop-item-left').addClass('-desktop-item-left-active');
		$(toolbaritemselector + ' .-desktop-item-middle').addClass('-desktop-item-middle-active');
		$(toolbaritemselector + ' .-desktop-item-right').addClass('-desktop-item-right-active');
	}
	else
	{
		$(toolbaritemselector + ' .-desktop-item-left').removeClass('-desktop-item-left-active');
		$(toolbaritemselector + ' .-desktop-item-middle').removeClass('-desktop-item-middle-active');
		$(toolbaritemselector + ' .-desktop-item-right').removeClass('-desktop-item-right-active');
	}		
}