// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Added public access token (my private one doesn't work)
mapboxgl.accessToken = 'pk.eyJ1IjoiY2pmcmFuY2UiLCJhIjoiY2xhYWxoNmF0MDh5bzNubnRteDhjOW02eSJ9.1AJlot0qo8GBLUXX6OgCMA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// Added a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
.setLngLat([-71.093729, 42.359244]) // MiT bus stop
.addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(()=>{
    // Use counter to access bus stops in the array busStops
    if (counter >= busStops.length) return;
    // Use the function marker.setLngLat() to update the marker coordinates
    marker.setLngLat(busStops[counter]);
    // advance to the next position
    counter++;
    // call move() after I increment the counter
    move();
    // call the repeating "move" function that is executing, repeat every second
  }, 1000)   // Moves the marker on the map every 1000ms.
}

if (typeof module !== 'undefined') {
  module.exports = { move };
}