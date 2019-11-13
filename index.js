$(function(){

  const element = document.getElementById("nav-tab");

  element.addEventListener('click', onTabClick, false);


function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.active');

  // deactivate existing active tab and panel
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace(' active', '');
  });

  // activate new tab and panel
  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

});

//here I put an event listener to our gallery buttons so I could see which button the user has selected
//Then I remove the active class from the last call the user did and put it on the new call

  $('.buttonContainer li').on('click',function(){
      $('.buttonContainer li').removeClass('active');
      $(this).addClass('active');
      let filter = $(this).attr('filterSelection');
       
    
//This function show all the images that has the active class
      $('.column').each(function(){
        if(filter === 'all'){
          $(this).fadeIn();
        }
        else {
          $(this).hide();
          if($(this).attr('filterCategory') === filter){
             $(this).fadeIn();
        }
      }
   });
  });
