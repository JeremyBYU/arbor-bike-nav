import * as Vue from 'vue'
import './filters.css'
import { Component } from 'vue-property-decorator'
import { bus } from '../../state/state'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}

const template: string = require('./filters.html') as string

@Component<Filters>({
  template
})
export default class Filters extends Vue {
  bikes: boolean = true
  restaurants: boolean = true
  parks: boolean = true
  busstops: boolean = true
  bikepaths: boolean = true

  mounted () {
    this.sendMessage()
  }

  sendMessage () {
    bus.$emit('filter-update', {
      bikes: this.bikes, restaurants: this.restaurants,
      parks: this.parks, busstops: this.busstops, bikepaths: this.bikepaths
    })

  }

}
