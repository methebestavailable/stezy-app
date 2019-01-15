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
    });
  }
}
