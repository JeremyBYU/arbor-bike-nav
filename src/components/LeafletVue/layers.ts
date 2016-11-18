import { markers } from '../../types'
import * as L from 'leaflet'
export const bikeStations: markers[] = [
  {
    latlong: [42.28049559999999, -83.7485514],
    text: 'Washington and Main'
  },
  {
    latlong: [42.2848154, -83.74584479999999],
    text: 'Kerrytown @5th'
  },
  {
    latlong: [42.2818116, -83.745684],
    text: 'City Hall/Justice Center'
  },
  {
    latlong: [42.2717882, -83.7466174],
    text: 'S. Division & Hill'
  },
  {
    latlong: [42.2786013, -83.7483742],
    text: 'Library Lane'
  },
  {
    latlong: [42.280738, -83.7423605],
    text: 'State & North Quad'
  },
  {
    latlong: [42.2785932,-83.7429747],
    text: 'State & North University'
  },
  {
    latlong: [42.2741972,-83.7428704],
    text: 'Madison & State'
  },
  {
    latlong: [42.2831433,-83.7358639],
    text: 'Zina Pitcher & Catherine'
  },
  {
    latlong: [42.2749907,-83.7380024],
    text: 'S. Universtiy & E. Univserity'
  },
  {
    latlong: [42.2782012,-83.734899],
    text: 'CCRB @ Washtenaw'
  }
]

export const bikeIcon = L.icon({
    iconUrl: 'static/bicycle-icon.png',
    shadowUrl: 'static/bicycle-icon.png',

    iconSize:     [32, 32], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
})
export const bikeLayerGroup: L.LayerGroup = L.layerGroup(bikeStations.map((marker) => {
  return L.marker(marker.latlong, { icon: bikeIcon} ).bindPopup(marker.text)
}))

export const layerGroups = {
  bikes: bikeLayerGroup
}
