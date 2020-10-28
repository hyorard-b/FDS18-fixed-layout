var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');

var li = $('.navigation ul>li');
var button = $('.menu-button');

button.click(function(e){
    e.preventDefault();
    li.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
});

item.addClass('icon-dot-circled');

tab.click(function (e){
    e.preventDefault();
    section.removeClass('is-active');
    $(this).parent().parent().addClass('is-active');
});