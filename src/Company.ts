import faker from 'faker';
import { Mappable, Location } from './Map';

export class Company implements Mappable {
  readonly companyName: string;
  readonly catchPhrase: string;
  readonly location: Location;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h2>Catchphrase: ${this.catchPhrase}</h2>
      </div>
    `;
  }
}
