'use strict';
document.addEventListener('DOMContentLoaded', function() {
    //Zadanie 1
    var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    var menu = document.querySelector('.dropdown');
    console.log(menu);
    
    forDropdown.addEventListener('mouseover', function(){
        menu.style.display = 'block';
    });
    forDropdown.addEventListener('mouseout', function(){
        menu.style.display = 'none';
    });
    //Zadanie 2
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    
    console.log(buttons[0].previousElementSibling);
    
    buttons[0].addEventListener('click', function() {
        var textArea = this.previousElementSibling;
        textArea.style.display = 'block'; 
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    });
    
    buttons[0].addEventListener('click', function() {


      if (textArea.style.display === 'none' || textArea.style.display === '') {

        textArea.style.display = 'block';
        
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    });
        
    

    });