interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(id) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });
  }
}
