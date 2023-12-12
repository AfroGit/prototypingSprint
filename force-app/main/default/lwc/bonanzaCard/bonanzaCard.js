import { LightningElement, api } from "lwc";
export default class BonanzaCard extends LightningElement {
    /*@api title = 'Christmas Bonanza!';*/

    @api description = 'Offer 20% Coupon For Email & Address Update .';

    pictureUrl = 'https://i.postimg.cc/2y1y3Kwn/Target-kristina-paukshtite-3444345.jpg';

    ready = false;
    connectedCallback() {
      setTimeout(() => {
        this.ready = true;
      }, 3000);
    }
}