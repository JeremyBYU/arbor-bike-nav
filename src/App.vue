<template>
  <div class="container" v-md-theme="'default'">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" v-md-theme="'white'">
        <a href="">
          <img src="./assets/arborbike_logo.png" alt="Arbor Bike">
        </a>
      </md-toolbar>

      <md-toolbar class="vue-material-logo" v-md-theme="'white'">
        <filters></filters>
      </md-toolbar>
      <md-toolbar style="margin-top:30px; height: 100%" :class="colorToolbar">
       <Timer :changecolor="changeColor"></Timer>
       
      </md-toolbar>
    </md-sidenav>
    <div class="page-content single-page" style="height:100%">
      <md-whiteframe md-elevation="1" class="main-header">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <div class="md-title">
            <span class="page-title">Arbor Bike</span>
          </div>

        </md-toolbar>
      </md-whiteframe>
      <div class="single-page-content" style="height:100%">
        <leaflet-vue></leaflet-vue>

      </div>
    </div>
  </div>


</template>

<script>
import LeafletVue from './components/LeafletVue/LeafletVue.ts'
import Filters from './components/filters/filters.ts'
import Timer from './components/Timer'

export default {
  name: 'app',
  data: () => {
    return {
      toolbar: true,
      returnTime: Math.trunc((Date.now() + 3.6e+6) / 1000),
      color: 0
    }
  },
  components: {
    LeafletVue,
    Filters,
    Timer
  },
  methods: {
    toggleSidenav () {
      this.$refs['main-sidebar'].toggle()
    },
    changeColor (color) {
      // console.log(color)
      this.color = color
    }
  },
  computed: {
    colorToolbar: function () {
      return {
        regular: this.color === 0,
        warning: this.color === 1,
        danger: this.color === 2
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../node_modules/vue-material/src/core/stylesheets/variables.scss';
  $sizebar-size: 200px;
  html,
  body {
    height: 100%;
  }
  
  body {
    display: flex;
  }
  .danger {
    background-color: #F01C00 !important;
  }
  .warning {
    background-color: #F2EF1D !important;
  }
  .regular {
    background-color: #3f51b5 !important;
  }
  
  .container {
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
    @media (min-width: 960px) {
      padding-left: $sizebar-size;
    }
  }
  
  .main-header {
    position: relative;
    z-index: 3;
    .md-button:first-child {
      @media (min-width: 960px) {
        display: none;
      }
    }
    .md-toolbar,
    .md-title {
      color: #fff;
    }
    .md-title {
      .page-title {
        margin-left: 0;
        @media (min-width: 960px) {
          margin-left: 8px;
        }
      }
      span:not(.page-title) {
        @media (min-width: 960px) {
          display: none;
        }
      }
    }
  }
  
  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      @media (min-width: 960px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }
    .md-backdrop {
      @media (min-width: 960px) {
        opacity: 0;
        pointer-events: none;
      }
    }
    .md-toolbar {
      min-height: 172px;
      border-bottom: 1px solid rgba(#000, .12);
    }
    .vue-material-logo {
      font-size: 24px;
      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }
      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }
    .main-sidebar-links {
      overflow: auto;
      .md-inset .md-list-item-container {
        padding-left: 36px;
      }
      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  
  .page-content {
    display: flex;
    flex-flow: column;
    flex: 1;
    overflow: auto;
    position: relative;
    z-index: 1;
  }
  
  .page-content-wrapper {
    display: flex;
    flex-flow: column;
    flex: 1;
  }
  
  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
  }
  
  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: $swift-ease-out;
    @media (min-width: 960px) {
      left: 200px;
    }
  }
  
  .md-router-enter,
  .md-router-leave-active {
    opacity: 0;
  }
  
  .md-router-enter {
    .md-display-2 {
      transform: translate3D(0, -36px, 0);
    }
  }
  .single-page-content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .single-page {
    padding-top: 64px;
    .main-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 2;
      transition: $swift-ease-out;
      @media (min-width: 960px) {
        padding-left: 200px;
      }
      .md-toolbar,
      .md-title {
        color: #fff;
      }
    }
  }
  
  code {
    &:not(.hljs) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 0 4px;
      display: inline-block;
      border-radius: 2px;
      font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
      pre {
        margin: 8px 0;
      }
    }
  }
</style>