jQuery(function($){
	var portfolio = $('#portfolio');
	portfolio.mansory ({ 
		isAnimated: true,
        itemSelector:'.bloc:not(.hidden)'

	});

	$('h1 a').click(function(e){
            var cls = $(this).attr(href).replace('#',"");
            portfolio.find('.bloc').removeClass('hidden');
            portfolio.find('.bloc:not(.'+cls+')').addClass('hidden')
            portfolio.mansory('reload');
            e.preventDefault();
	})
})