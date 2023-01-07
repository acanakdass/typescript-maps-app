import { faker } from "@faker-js/faker";

export class Company {
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
    }
}