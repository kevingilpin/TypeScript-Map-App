import faker from 'faker';
import { Mappable, Location } from './Map';

export class User implements Mappable {
  readonly name: string;
  readonly location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
    `;
  }
}
