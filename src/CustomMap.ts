import { Mappable } from "./Interfaces/Mappable";
import { Company } from "./Models/Company";
import User from "./Models/User";
export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(mapDiv: HTMLElement) {
        this.googleMap = new google.maps.Map(mapDiv, {
            zoom: 2,
            center: {
                lat: 41.038490441829936,
                lng: 28.979855998862647
            },
            fullscreenControl: true,
        })
    }
    addMarker(mappable:Mappable): void {
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.latitude,
                lng:mappable.location.longitude
            },
            // label:.name
        })
        marker.addListener('click',()=>{
            let infoWindow = new google.maps.InfoWindow({
                content:mappable.getMarkerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }
    
    addCompanyMarker(company:Company): void {
    }
}