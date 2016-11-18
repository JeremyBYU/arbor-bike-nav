import { markers, paths } from '../../types'
import * as L from 'leaflet'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}

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


export const restaurants: markers[] = [
  {
    latlong: [42.298631, -83.721544],
    text: 'Cardamon'
  },
  {
    latlong: [42.2877475,-83.7431325],
    text: 'Gandys Dancer'
  },
  {
    latlong: [42.279766, -83.741115],
    text: 'Savas'
  },
  {
    latlong: [42.280380, -83.749406],
    text: 'Fritas Batidas'
  },
  {
    latlong: [42.279290, -83.745433],
    text: 'Jerusalem Garden'
  }
]

export const buststopList: markers[] = [
  {
    latlong: [42.29987343218852,-83.71271810929568],
    text: 'Northwood IV'
  },
  {
    latlong: [42.29501678212016,-83.7154432336548],
    text: 'Northwood I'
  },
  {
    latlong: [42.29376288025727,-83.72102222840579],
    text: 'Bursley Hall'
  },
  {
    latlong: [42.282429014542316,-83.73097858826907],
    text: 'UMICH Hospital'
  },
  {
    latlong: [42.27836483495793,-83.73548469941409],
    text: 'CC Little'
  }
]


export const bikePaths: paths[] = [
  {
    latlong: [
     [42.287150, -83.720129], [42.286729, -83.720236], [42.285665, -83.720290],
     [42.284544, -83.719877], [42.284480, -83.718375], [42.283916, -83.717721], [42.283739, -83.716575],
     [42.283414, -83.715760], [42.281866, -83.712520], [42.278945, -83.709424], [42.277017, -83.705952],
     [42.275810, -83.703688], [42.275627, -83.702443]
    ],
    text: 'River Path'
  }
]


export const parkList: paths[] = [
  {
    latlong: [
     [42.28755649209656,-83.73248062531741], [42.29073119159794,-83.72758827607424],
     [42.28749299647452,-83.72604332368167],[42.286985029194135,-83.73222313325198]
    ],
    text: 'Fuller Park'
  },
  {
    latlong: [
     [42.28365139227654,-83.71119461457522], [42.27996831211897,-83.70501480500491],
     [42.27952378788499,-83.7061306039551],[42.277205860715206,-83.70308361451418],
     [42.276634303925825,-83.70329819123538],[42.282476640092774,-83.71136627595217]
    ],
    text: 'Furstenburg Nature Area'
  },
  {
    latlong: [
     [42.26691704538595,-83.7295623819092], [42.266917045385966,-83.72698746125491],
     [42.26561494595457,-83.72651539246829],[42.26510680229559,-83.72951946656497]
    ],
    text: 'Burns Park'
  }
]

export const bikeIcon = L.icon({
    iconUrl: require('../../assets/bicycle-icon.png') as string,//'static/bicycle-icon.png',
    shadowUrl: 'static/bicycle-icon.png',

    iconSize:     [32, 32], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
})

export const busIcon = L.icon({
    iconUrl: require('../../assets/busstop-icon.png') as string,
    shadowUrl: 'static/busstop-icon.png',

    iconSize:     [32, 32], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
})

export const restrauntsIcon = L.icon({
    iconUrl: require('../../assets/restaurant-icon.png') as string,
    shadowUrl: 'static/restaurant-icon.png',

    iconSize:     [32, 32], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
})

const bikeLayerGroup: L.LayerGroup = L.layerGroup(bikeStations.map((marker) => {
  return L.marker(marker.latlong, { icon: bikeIcon} ).bindPopup(marker.text)
}))

const restaurantsLayerGroup: L.LayerGroup = L.layerGroup(restaurants.map((marker) => {
  return L.marker(marker.latlong, { icon: restrauntsIcon} ).bindPopup(marker.text)
}))

const busstopsLayerGroup: L.LayerGroup = L.layerGroup(buststopList.map((marker) => {
  return L.marker(marker.latlong, { icon: busIcon} ).bindPopup(marker.text)
}))

const pathLayerGroup: L.LayerGroup = L.layerGroup(bikePaths.map((path) => {
  return L.polyline(path.latlong, {
    color: 'blue',
    weight: 5,
    opacity: .5,
    smoothFactor: 1
  })
}))


const parkLayerGroup: L.LayerGroup = L.layerGroup(parkList.map((park) => {
  return L.polygon(park.latlong, {
    color: 'green',
    weight: 5,
    opacity: .5,
    smoothFactor: 1
  })
}))

export const layerGroups = {
  bikes: bikeLayerGroup,
  bikepaths: pathLayerGroup,
  restaurants: restaurantsLayerGroup,
  parks: parkLayerGroup,
  busstops: busstopsLayerGroup
}
