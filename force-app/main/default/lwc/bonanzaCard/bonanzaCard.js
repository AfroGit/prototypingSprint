import { LightningElement, api } from "lwc";
export default class BonanzaCard extends LightningElement {
    @api title = 'Christmas Bonanza!';

    @api description = 'Offer 20% Coupon For Email & Address Update .';

    pictureUrl = 'https://i.postimg.cc/L6T42RRG/target2-valeria-vinnik-246356.jpg';

    ready = false;
    connectedCallback() {
      setTimeout(() => {
        this.ready = true;
      }, 3000);
    }
}