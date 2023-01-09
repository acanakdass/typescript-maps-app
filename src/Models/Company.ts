import { faker } from "@faker-js/faker";
import { Mappable } from "../Interfaces/Mappable";


export class Company implements Mappable {
    constructor() {
        this.name = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.id = faker.datatype.uuid()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
    id: string;
    name: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    };
    getMarkerContent(): string {
        return `
        <div>
            <h1>Company Name : ${this.name} </h1>
            <h3>Catchphrase : ${this.catchPhrase} </h3>
        </div>`
    }
}