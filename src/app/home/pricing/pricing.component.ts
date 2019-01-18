import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
    nav: true,
    //autoplaySpeed:1
  }

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor() {
    this.slidesStore = [
      {
        id: "01",
        title: "Free",
        shortDescription: "Get Started Free",
        descriptionArray: [
          "For learning, prototypes, and early development",
          "Lifetime free Node access to Stezy Private Blockchain",
        ],
        height: true
      },
      {
        id: "02",
        title: "Business",
        shortDescription: "Starting $199/month",
        descriptionArray: [ 
           "Designed for every stage of <br/>  your application",
           "Pay only for the nodes you <br/> provision ",
           "<span  class='li_bold'> Small Node  </span>  <br/> $199 / month <br/>  v1 CPU 1 GB Ram 8GB Storage",
           "<span  class='li_bold'> Medium Node </span>  <br/> $299 / month <br/>  v2 CPU 4 GB Ram 200GB Storage",
           "<span  class='li_bold'> Large Node  </span>  <br/> $499 / month <br/>  v4 CPU 16 GB Ram 1TB Storage",
        ],
        height: false

      },
      {
        id: "03",
        title: "Enterprise",
        shortDescription: "Contact Us",
        descriptionArray: [
         "Includes proactive support and advanced  enterprise features  ",
         "Contact Us",
         ],
        height: true

      }
    ]
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  ngOnInit() :void{
  console.log(this.slidesStore)
   setTimeout(() => {
     document.getElementsByClassName('li_bold')[0].setAttribute('_ngcontent-c1','')
     document.getElementsByClassName('li_bold')[1].setAttribute('_ngcontent-c1', '')
     document.getElementsByClassName('li_bold')[2].setAttribute('_ngcontent-c1', '')
     document.getElementsByClassName('table_data')[1].lastElementChild.setAttribute('style', 'border:none')
}, 5);
  }

}
