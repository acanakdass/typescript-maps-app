import { faker } from '@faker-js/faker'
import { Mappable } from '../Interfaces/Mappable';
class User implements Mappable {
    constructor() {
        this.name = faker.name.fullName()
        this.id = faker.datatype.uuid()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
    id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    getMarkerContent():string{
        return `User name : ${this.name}`
    }
}
export default User