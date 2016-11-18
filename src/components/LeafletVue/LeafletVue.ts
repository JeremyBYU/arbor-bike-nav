import * as Vue from 'vue'
import './LeafletVue.css'
//import {require } '../../types.ts'  // Require Signature for Typescript
import { Component, prop } from 'vue-property-decorator';
import { bus } from '../../state/state'
import { bikeLayerGroup, bikeStations } from './layers.ts'
import * as L from 'leaflet'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

const template:string = require('./LeafletVue.html') as string


@Component<LeafletVue>({
  template,
})
export default class LeafletVue extends Vue {
  msg:string = "Welcome to Vue.js App1"
  map:L.Map = null;
  mapDiv: HTMLElement = null;

  created () {
    

  }

  mounted () {
    this.mapDiv = <HTMLElement>this.$el.querySelector('.leaflet-vue')
    this.resize();
    // Create the Map
    this.map = L.map(this.mapDiv).setView([42.279594, -83.732124], 13);
    // Add the tile layer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)
    // add resize event listeners
    window.addEventListener('resize', this.resize)

    this.toggleBikes()
  }
  resize () {
    let height = this.$el.clientHeight
    this.mapDiv.style.height = String(height) + 'px'

  }
  toggleBikes () {
    if (this.map.hasLayer(bikeLayerGroup)) {
      this.map.removeLayer(bikeLayerGroup)
    } else {
      this.map.addLayer(bikeLayerGroup)
    }
  }
}
