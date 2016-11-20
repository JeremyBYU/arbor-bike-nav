import * as Vue from 'vue'
import './LeafletVue.css'
// import {require } '../../types.ts'  // Require Signature for Typescript
import { Component } from 'vue-property-decorator'
import { bus } from '../../state/state'
import { layerGroups } from './layers'
import * as L from 'leaflet'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}

const template: string = require('./LeafletVue.html') as string

@Component<LeafletVue>({
  template
})
export default class LeafletVue extends Vue {
  msg: string = '"Welcome to Vue.js App1'
  map: L.Map = null
  mapDiv: HTMLElement = null

  mounted () {
    this.mapDiv = this.$el.querySelector('.leaflet-vue') as HTMLElement
    this.resize()
    // Create the Map
    this.map = L.map(this.mapDiv).setView([42.279594, -83.732124], 13)
    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)
    // add resize event listeners
    window.addEventListener('resize', this.resize)
    bus.$on('filter-update', this.toggleFilters)
    this.toggleFilters( { bikes: true})
  }
  resize () {
    let height = this.$el.clientHeight
    this.mapDiv.style.height = String(height - 64) + 'px'
  }
  toggleFilters (obj) {
    //debugger
    for (let prop in obj) {
      const layer: L.LayerGroup = layerGroups[prop]
      if (layer === undefined) {
        continue
      }
      if (this.map.hasLayer(layer) && !obj[prop]) {
        // need to remove layer
        this.map.removeLayer(layer)
      }
      if (!this.map.hasLayer(layer) && obj[prop]) {
        // Does not have layer but we need it
        this.map.addLayer(layer)
      }
    }

  }
}
