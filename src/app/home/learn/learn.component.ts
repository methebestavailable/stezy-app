import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
        $('.nav-tabs li').on('click', function(e){
          e.preventDefault();
          $('.nav-tabs li').removeClass('active');
          $(this).addClass('active')
      });



      $('.navbtntik').on('click', function(e){
        e.preventDefault();
        $('.side_menu').addClass('showin');
    });
    $('.navbtnclose').on('click', function(e){
      e.preventDefault();
      $('.side_menu').removeClass('showin');
  });

  $('.side_menu li').on('click', function(e){
    e.preventDefault();
    $('.side_menu').removeClass('showin');
});

$('.homeclick').on('click', function(e){
  e.preventDefault();
  $('#home').addClass('active show');
  $('#getting').removeClass('active show');
  $('#services').removeClass('active show');
  $('#guide').removeClass('active show');
  $('#api').removeClass('active show');
  $('#other_faqs').removeClass('active show');
  $('#support').removeClass('active show');
});

$('.gettingstarted').on('click', function(e){
  e.preventDefault();
  $('#home').removeClass('active show');
  $('#getting').addClass('active show');
  $('#services').removeClass('active show');
  $('#guide').removeClass('active show');
  $('#api').removeClass('active show');
  $('#other_faqs').removeClass('active show');
  $('#support').removeClass('active show');
});

$('.needsupport').on('click', function(e){
  e.preventDefault();
  $('#home').removeClass('active show');
  $('#getting').removeClass('active show');
  $('#services').removeClass('active show');
  $('#guide').removeClass('active show');
  $('#api').removeClass('active show');
  $('#other_faqs').removeClass('active show');
  $('#support').addClass('active show');
});
    

    });
  }
}
