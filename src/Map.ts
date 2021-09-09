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
}
