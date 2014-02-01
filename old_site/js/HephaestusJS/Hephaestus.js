
(function($)
{
    $.fn.extend(
    {
        hephsystem: function(options)
        {
            var defaults = {};
            var newoptions = $.extend(defaults, options);

            return this.each(function()
            {
                $.extend(this, { options: newoptions });
                var obj = $(this);
        
                $.post(window.location.href, { viewbos: true }, function(data)
                {                    
                    var newdiv = $("<div/>");
                    $(newdiv).html(data.t);
                    obj.append(newdiv);                    
                }, "json");
            });
        }
    });
})(jQuery);

$(document).ready(function()
{       
    $(".maincontainer").hephsystem();         
});