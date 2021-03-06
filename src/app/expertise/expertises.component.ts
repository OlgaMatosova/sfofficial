import { Component } from '@angular/core';

@Component({
  selector: 'sf-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss']
})
export class SFExpertisesComponent {
  imageUrl: string = 'assets/images/';
  title: string = 'Expertises';
  textBanner: string = 'Due to the long experience and versatile skills of our specialists, we are able to develop innovative technology solutions to meet the business needs of our clients.';
 

  expertises = [
    { link: "portals", img: "rectangle-24.png", title: "Web and Enterprise Portals", desc: "Be it a specific vertical or horizontal enterprise solution, Stableflow has a rich skillset to develop turnkey web portals boosting your business performance and customer satisfaction." },
    { link: "social", img: "soc_network.jpg", title: "Social Networking", desc: "Stableflow creates dazzling cross-platform social experiences rooted in comprehensive networking platforms, enterprise portals and web apps." },
    { link: "automation", img: "bp_automation.jpg", title: "Business Process Automation", desc: "We craft advanced BP automation software, transforming the way operations are done to achieve time/effort saving and business growth." },
    { link: "mobile-enterprise", img: "mob_app.jpg", title: "Enterprise Mobile Apps", desc: "iOS, Android and hybrid mobile software development" },
    { link: "ecommerce", img: "ecommerce.jpg", title: "Ecommerce", desc: "We understand that your online website store needs to be profitable." },
    { link: "hospital", img: "Cloud-Computing.jpg", title: "Hospital Managment System", desc: "With cloud services, you can harness the power of the Internet to reduce your dependence on hardware and software." },
 ]
}