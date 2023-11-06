import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [-6539535.4,-4098967.9],
    //-6539535.9,-4098967.5
    maxZoom: 20,
	minZoom: 15,
    zoom: 20,
  }),
});
