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
      listiii: "Each participant has their own version of the ledger and there is a weak integration between them",
      learmore: "Learn More"
    },
    {
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "03",
      heading: "Know your customer", 
      listi: "Improve onboarding experience for new customers",
      listii: "Centralizing the KYC process increase efficiency and cost-effectiveness",
      listiii: "Increased customer control over how their data is accessed and shared",
      learmore: "Learn More"
    },
    { 
      backgroundimg: "../../../assets/valuebg1.jpg",
      number: "04",
      heading: "Digital Asset Transfer",
      listi: "Intermediary will initially support the process playing the role of the ledger",
      listii: "Subsequent steps will limit the role of the intermediary and replace with automated smart contract features",
      listiii: "Removal of costly intermediaries",
      learmore: "Learn More"
    },
    {
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "05",
      heading: "HealthCare", 
      listi: "Personal health information management",
      listii: "Secure patient data sharing",
      listiii: "Insurance claim adjudication",
      learmore: "Learn More"
    },
    { 
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "06",
      heading: "Insurance",
      listi: "Revolutionize the trust that powers Insurance",
      listii: "Fully automate Underwriting",
      listiii: "Accelarate the claims settlement",
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
