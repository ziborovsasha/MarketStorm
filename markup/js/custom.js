(function($) {
$(function() {
	$('.styler').styler();
});




(function($) {
$(function() {
		$('.styler').styler();
});

		$('.more').click(function(){
			$(this).parents('.news').find('.news__excerpt').slideToggle()
			$(this).html('Скрыть')
			$('.news__img').slideToggle()
			return false;
		});

})(jQuery);
