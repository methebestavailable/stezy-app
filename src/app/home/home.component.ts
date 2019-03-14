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
key_popup:string
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
  responsive: {0: {items: 1},400: { items: 1},740: {items: 2},940: {items: 3}},
  
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
  activeSlidesD: SlidesOutputData;

slidesStoreA: any[];
slidesStoreB: any[];
slidesStoreC: any[];
slidesPopUp: any[];

constructor() {
  this.slidesStoreA = [
    { 
      id:1,
      backgroundimg: '../../../assets/valuebg1.jpg',
      number: "01",
      heading: "Supply Chain",
      listi: "Create a shared ledger as the single source of truth",
      listii: "Upload data into the shared ledger  via human or self-managed inputs",
      listiii: "Intelligent actions based on Smart Contract notifications",
      learmore: "Learn More",
      learn_more_challengesArray: [
        "Supply chain management can be cash-flow unaware.",
        "Supply chain optimization usually ignores contract terms.",
        "Each participant has their own version of the ledger and there is a weak integration between them.",
        "In case of anomalies, accountability is needed to avoid expensive reconciliation of disputes.",
      ],
      learn_more_potentialArray: [
        "Optimize inventory levels and turns",
        "Lower transportation and warehousing costs",
        "Increase trust and visibility across the supply chain by providing a single source of truth",
        "Reduce legal expenses via self-executing Smart Contracts",
        "Payments are automatic, condition-based and adjusted for performance. ",
        "Enterprises that collaborate effectively across the supply chain can benefit from reduce in inventories and costs, together with improvements in speed, service levels, and customer satisfaction.",
        "Stezy Blockchain Platform can reliably and securely mediate product movements and money transfers on one ledger accessible across the supply chain. It enables deep integration of supply chain operations and financing.",
      ],
    },
    { 
      id:2,
      backgroundimg: "../../../assets/valuebg2.jpg",
      number: "02",
      heading: "Trade Finance",
      listi: "Use Blockchain ledger as a single source of truth and allowing access to all authorized parties",
      listii: "Focus on utilizing smart contracts to manage letters of Credit (LoC) or BoL status",
      listiii: "Early actions based on smart contract status notification",
      learmore: "Learn More",
      learn_more_challengesArray: [
        "Time-intensive creation and management of financial agreements ",
        "Manual Anti-Money Laundering (AML) compliance checks",
        "Duplicative efforts managing Bills of Lading (BoL)",
        "Multiple versions of the truth increase costs and impact efficiency ",
        "Delayed settlement results inconsistent business cash flow ",
      ],
      learn_more_potentialArray: [
        "Enhanced transparency as all parties share in a single source of truth",
        "Increased business agility by decrease time to payment",
        "Decreased need for trusted intermediaries",
      ],
        },
    {
      id:3,
      backgroundimg: "../../../assets/valuebg3.jpg",
      number: "03",
      heading: "Know Your Customer", 
      listi: "Improve onboarding experience for new customers",
      listii: "Adding participants(e.g.institutions) into the system",
      listiii: "A single global entity for updating the global ledger",
      learmore: "Learn More",
      learn_more_challengesArray: [
        "Poor customer onboarding experience across companies",
        "Same customer, multiple identities in same corporate group ",
        "Time consuming process to verify identity and documents authenticity",
        "Difficult to ensure customer data privacy and traceability ",
      ],
      learn_more_potentialArray: [
        "Centralizing the KYC process increase efficiency and cost-effectiveness.",
        "Improve onboarding experience across all authorized parties.",
        "Eliminating manual compliance checks. ",
        "Secure exchange of information between different trusted entities",
        "Increased customer control over how their data is accessed and shared.",
        "Stezy Blockchain platform can help redefine, digitize and improve how trade finance instruments are executed today.",
      ],},
    { 
      id:4,
      backgroundimg: "../../../assets/valuebg4.jpg",
      number: "04",
      heading: "Digital Asset Transfer",
      listi: "Digital distributed ledger recording transaction histories and asset ownership records",
      listii: "Secure asset-transfer application to facilitate transactions and enable digital  signing",
      listiii: "Real-time, self-executing Smart Contracts triggered based on agreement terms and conditions ",
      learmore: "Learn More",
      learn_more_info: "DDDDDDDDDDDDDDDDDDDDDDDDDDD of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      learn_more_challengesArray: [
        "Removal of costly intermediaries",
        "Lack of transparency into asset ownership and transaction history",
        "Expensive and time-consuming reconciliation activities lead to delayed settlement",
      ],
      learn_more_potentialArray: [
        // "Enhanced pre-transfer transparency into asset ownership",
        // "Increased operational efficiency and data standardization",
        // "Reduce/eliminate need for costly intermediaries  ",
        // "Achieve near real-time settlement",
        "Stezy Blockchain ledgers can store and record balances, debits and credits related to any type of asset transfer, and provide a trusted source of truth for recording transaction histories, and asset ownership records.",
      ],
    },
    {
      id:5,
      backgroundimg: "../../../assets/valuebg5.jpg",
      number: "05",
      heading:    "HealthCare", 
      listi:      "Personal health information management",
      listii:     "Secure patient data sharing",
      listiii:    "Insurance claim adjudication",
      listiiii:   "Clinical trial management",
      listiiiii:  "Tracking of Drug supply chain ",
      learmore:   "Learn More",
      learn_more_info: "EEEEEEEEEEEEEEEEEEEEEEEE of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      learn_more_challengesArray: [
        "Inefficiency in processes leading to increased cost ",
        "Lack of transparency",
        "Lack of trust  ",
        "Inefficiency of intermediaries ",
      ],
      learn_more_potentialArray: [
        "Redesign costly legacy workflows improve liquidity and free up capital. Help reduce infrastructure costs, increase transparency, reduce fraud and improve execution and settlement times ",
        "Manage healthcare finances for better risk management, regulatory compliance and business continuity ",
        "Help the care providers with right information to deliver better healthcare outcomes ",
        "Give patients information that helps them understand, control, and manage their personal health decisions"
      ],
    },
    { 
      backgroundimg: "../../../assets/valuebg6.jpg",
      number: "06",
      heading: "Insurance",
      listi: "Revolutionize the trust that powers Insurance",
      listii: "Fully automate Underwriting",
      listiii: "Accelarate the claims settlement",
      listiiii: "Reduce Fraud ",
      learmore: "Learn More",
      learn_more_info: "FFFFFFFFFFFFFFFFFFF    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      learn_more_challengesArray: [
        "Human Intervention at various points elevates the chance of errors, delays claim resolution and increases costs. The challenge escalates with complex insurance programs or managing policies in multiple countries, involving strict legal and regulatory adherence ",
        "Subrogation of Claims requires significant involvement from insurers and third-party companies. Manual multi-step, multi-company reviews can be costly and time-consuming, typically resulting in an incomplete view of untrusted data ",
        "Companies offering group benefits often rely on a complex network of administrators, providers, employees and others. Different versions of the same data require consolidation to ensure eligibility for benefits. For reinsurers working together, shared visibility into operational data is very important  ",
        "Major claim events like natural disasters require multiple insurers to share risk for effective operations and business viability ",
      
      ],
      learn_more_potentialArray: [
        "A transparent blockchain solution allowing multiple companies to collaboratively assemble relevant records can streamline claims recovery ",
        "Blockchain shared ledger capabilities can help insurers agree on claims, build trust that evidence is being shared and improve the overall customer experience ",
        "Stezy can be the vital link for the vast ecosystem of third-party administrators and service provider networks. Its shared ledger transparency can help employers reduce errors resulting in improved claims processing ",
        "Secure exchange of information between different trusted entities ",
      ],
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
      logo: "../../../assets/hasbro.jpg"},
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


FixDisplaySlider(key){
  this.data =  false
  this.key_popup = key;
}
returnSlider(){
  this.data =  true;
}
}
