import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

customOptions: any = {
  margin: 30,
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  autoplay: true,
  navSpeed: 700,
  navText: ['', ''],
  nav: false,
  responsive: {0: {items: 1},400: { items: 1},740: {items: 3},940: {items: 3}},
  
  //autoplaySpeed:1
}
customOptionsTwo: any = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  autoplay: true,
  navSpeed: 700,
  navText: ['', ''],
  nav: true,
  responsive: {0: {items: 1},400: { items: 3},740: {items: 3},940: {items: 3}},
  
  //autoplaySpeed:1
}
  customOptionsThree: any = {
    margin: 30,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: { 0: { items: 1 }, 400: { items: 1 }, 740: { items: 3 }, 940: { items: 3 } },
    nav: false,
    //autoplaySpeed:1
  }

activeSlidesA: SlidesOutputData;
activeSlidesB: SlidesOutputData;
activeSlidesC: SlidesOutputData;
slidesStoreA: any[];
slidesStoreB: any[];
slidesStoreC: any[];
constructor() {
  this.slidesStoreA = [
    { 
      backgroundimg: "../../../assets/valuebg1.jpg",
      number: "01",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More"
    },
    { 
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "02",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More"
    },
    {
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "03",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More"
    },
    { 
      backgroundimg: "../../../assets/valuebg1.jpg",
      number: "04",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More"
    },
    {
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "05",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More"
    },
    { 
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "06",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More"
    },
  ]
  this.slidesStoreB = [
    {
      src: "../../../assets/microsoft_img.png"
    
    },
    {
      src: "../../../assets/hyperledger_img.png"
      
    },
    {
      src: "../../../assets/aws.png"

    },
  ]
  
  this.slidesStoreC = [
    {
      name: "Carl Jung",
      text: "Lorem Ipsum is simply dummy text of the printing an typesetting industry.Lorem Ipsum has been the industry'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", 
      src: "../../../assets/people_img1.jpg",
      logo: "../../../assets/elisa_logo1.jpg"
    },
    {
      name: "Samantha Torres",
      text: "Lorem Ipsum is simply dummy text of the printing an typesetting industry.Lorem Ipsum has been the industry'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      src: "../../../assets/people_img2.jpg",
      logo: "../../../assets/carlton_logo1.jpg"
    },
    {
      name: "Jane Write",
      text: "Lorem Ipsum is simply dummy text of the printing an typesetting industry.Lorem Ipsum has been the industry'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      src: "../../../assets/people_img3.jpg",
      logo: "../../../assets/hasbro.jpg"


    },
  ]

}

getDataA(data: SlidesOutputData) {
  this.activeSlidesA = data;
  console.log(this.activeSlidesA);
}
getDataB(data: SlidesOutputData) {
    this.activeSlidesB = data;
    console.log(this.activeSlidesB);
}
getDataC(data: SlidesOutputData) {
    this.activeSlidesC = data;
    console.log(this.activeSlidesC);
}
ngOnInit(): void{

}

}
