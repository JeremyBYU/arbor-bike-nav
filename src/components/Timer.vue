<template>
  <div>
    <div class="block">
      <p class="digit">{{minutes }}</p>
      <p class="text">Minutes Remaining</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: {
    date: {
      type: Number
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  methods: {
    two_digits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  },
  computed: {
    seconds () {
      return this.two_digits((this.date - this.now) % 60)
    },
    minutes () {
      return this.two_digits(Math.trunc((this.date - this.now) / 60) % 60)
    },
    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  }
}
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .text {
    color: #1abc9c;
    font-size: 22px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .digit {
    color: #ecf0f1;
    font-size: 20px;
    font-weight: 20;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>