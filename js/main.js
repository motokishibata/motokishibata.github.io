$(function(){
  $('li.some-link').on('click',function() {
    var index = $('li.some-link').index(this);
    $('.work-detail').eq(index).slideToggle();
    $('.work-detail').eq(index).siblings('.work-detail').slideUp();
  });
});
