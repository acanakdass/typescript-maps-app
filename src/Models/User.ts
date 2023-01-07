import { faker } from '@faker-js/faker'
class User {
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
    }
}
export default User