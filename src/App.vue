<template>
  <div class="container" v-md-theme="'default'">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

    </md-sidenav>
    <div class="page-content single-page">
      <md-whiteframe md-elevation="1" class="main-header">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <div class="md-title">
            <span class="page-title">Arbor Bike</span>
          </div>

          <md-button href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener" class="md-icon-button github-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="#ffffff" d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.69 418.13 350.16 485.81 25.59 4.69 34.94-11.12 34.94-24.62 0-12.19-0.47-52.56-0.72-95.31C242 908.81 211.91 817.5 211.91 817.5c-23.31-59.12-56.84-74.87-56.84-74.87-46.53-31.75 3.53-31.12 3.53-31.12 51.41 3.56 78.47 52.75 78.47 52.75 45.69 78.25 119.88 55.63 149 42.5 4.65-33 17.9-55.62 32.5-68.37C304.91 725.44 185.34 681.5 185.34 485.31c0-55.94 19.97-101.56 52.66-137.41-5.22-13-22.84-65.09 5.06-135.56 0 0 42.94-13.75 140.81 52.5 40.81-11.41 84.59-17.03 128.13-17.22 43.5 0.19 87.31 5.88 128.19 17.28 97.69-66.31 140.69-52.5 140.69-52.5 28 70.53 10.38 122.56 5.13 135.5 32.81 35.84 52.63 81.47 52.63 137.41 0 196.69-119.75 240-233.81 252.69 18.44 15.88 34.75 47 34.75 94.75 0 68.44-0.69 123.63-0.69 140.5 0 13.63 9.31 29.56 35.25 24.56C877.44 930 1024 738.13 1024 512 1024 229.25 794.75 0 512 0z">
            </svg>
          </md-button>
        </md-toolbar>
      </md-whiteframe>
      <div class="single-page-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt
          ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis
          iusto!
        </p>
      </div>
    </div>
  </div>


</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data: () => {
    return {
      toolbar: true
    }
  },
  components: {
    Hello
  },
  methods: {
    toggleSidenav () {
      this.$refs['main-sidebar'].toggle()
    }
  }
}
</script>

<style lang="scss">
  @import '../node_modules/vue-material/src/core/stylesheets/variables.scss';
    $sizebar-size: 280px;

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;

    @media (min-width: 1280px) {
      padding-left: $sizebar-size;
    }
  }

  .main-header {
    position: relative;
    z-index: 3;

    .md-button:first-child {
      @media (min-width: 1280px) {
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

        @media (min-width: 1280px) {
          margin-left: 8px;
        }
      }

      span:not(.page-title) {
        @media (min-width: 1280px) {
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

      @media (min-width: 1280px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0,0,0);
        box-shadow: $material-shadow-2dp;
      }
    }

    .md-backdrop {
      @media (min-width: 1280px) {
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

    @media (min-width: 1280px) {
      left: 280px;
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