import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:boolean = true;
array:any[]
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
customOptionsTwoData: any = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  autoplay: false,
  navSpeed: 700,
  navText: ['', ''],
  nav: false,
  responsive: {0: {items: 1},400: { items: 3},740: {items: 1},940: {items: 1}},
  
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
      id:1,
      backgroundimg: "../../../assets/valuebg1.jpg",
      number: "01",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More",
      learn_more_info: "AAAAAAAAAAAAAAAAAAAA of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    { 
      id:2,
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "02",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More",
      learn_more_info: "BBBBBBBBBBBBBBBBBBBBBBBBBBBb xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id:3,
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "03",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More",
      learn_more_info: "CCCCCCCCCCCCCCCCCCCCCCCCCC of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    { 
      id:4,
      backgroundimg: "../../../assets/valuebg1.jpg",
      number: "04",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More",
      learn_more_info: "DDDDDDDDDDDDDDDDDDDDDDDDDDD of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id:5,
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "05",
      heading: "Trade Finance", 
      listi: "Use Blockchain ledger us a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More",
      learn_more_info: "EEEEEEEEEEEEEEEEEEEEEEEE of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    { 
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "06",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Upload data into the shared ledger  via human or self-managed inputs",
      learmore: "Learn More",
      learn_more_info: "FFFFFFFFFFFFFFFFFFF    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
      text: "Stezy platform helped us to build the blockchain solution real quick. Thanks for the support we received from the Technical team", 
      src: "../../../assets/people_img1.jpg",
      logo: "../../../assets/elisa_logo1.jpg"
    },
    {
      name: "Samantha Torres",
      text: "We were thinking of building a blockchain solution for supply chain. We found Stezy blockchain from Quora and their Do it yourself blockchain helped us to quickly prototype and in 2 weeks’ time we could deploy in production. Great platform",
      src: "../../../assets/people_img2.jpg",
      logo: "../../../assets/carlton_logo1.jpg"
    },
    {
      name: "Jane Write",
      text: "Stezy blockchain platform helped in saving time, cost, effort with zero maintenance and a very affordable subscription. Thanks to team of going out of box to help us integrate blockchain",
      src: "../../../assets/people_img3.jpg",
      logo: "../../../assets/hasbro.jpg"


    },
  ]
  this.array = this.slidesStoreA

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


FixDisplaySlider(slide){
  this.data =  false
  // this.customOptionsTwo['responsive'][940]["items"] = 1;
  this.slidesStoreA[0] = slide

}
returnSlider(){
  this.data =  true
  this.slidesStoreA = this.array
  // this.customOptionsTwo['responsive'][940]["items"] = 3; 
  // window.scrollTo(this.cro.nativeElement.id,1000);
}
}
