import { CustomMap } from "./CustomMap"
import { Company } from "./Models/Company"
import User from "./Models/User"
console.log('hello from typescript..')

const company = new Company()
const mapdiv = document.getElementById("google-map") as HTMLElement

const customMap=new CustomMap(mapdiv);

const user = new User()
customMap.addMarker(user)
customMap.addMarker(company)


console.log(user)
console.log(company) 