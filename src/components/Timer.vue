<template>
  <div>
    <div class="block">
      <p class="digit" :class="{'black-text': minutes < 30 && minutes > 15}">{{minutes }}:{{seconds}}</p>
      <p v-on:click="fastForward" class="text" :class="{'black-text': minutes < 30 && minutes > 15}">Minutes Remaining</p>
    </div>
  </div>
</template>
<script>
import { beep1, beep2, beep3 } from './sounds'
export default {
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: {
    changecolor: {
      type: Function
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: Math.trunc((Date.now() + 3.6e+6) / 1000),
      beepsDone: 0
    }
  },
  methods: {
    two_digits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },
    fastForward () {
      const S_PER_MINUTE = 60
      // Reset the date back to 60 minutes in the future if its back to 0.
      if (this.date - this.now < 0) {
        this.date = Math.trunc((Date.now() + 3.6e+6) / 1000)
      } else {
        this.date = this.date - 10 * S_PER_MINUTE
      }
    },
    beepN (num) {
      if (num === 1) {
        beep1.play()
      } else if (num === 2) {
        beep2.play()
      } else {
        beep3.play()
      }
    }
  },
  computed: {
    seconds () {
      return this.two_digits(Math.max((this.date - this.now) % 60, 0))
    },
    minutes () {
      return this.two_digits(Math.max(Math.trunc((this.date - this.now) / 60) % 60, 0))
    },
    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  },
  watch: {
    // whenever minutes changes, this function will run
    minutes: function (minutes) {
      if (this.minutes < 5) {
        if (this.beepsDone < 4) {
          this.beepN(3)
          this.beepsDone += 3
        }
      } else if (this.minutes < 10) {
        this.changecolor(2)
        if (this.beepsDone < 2) {
          this.beepN(2)
          this.beepsDone += 2
        }
      } else if (this.minutes < 30) {
        this.changecolor(1)
        if (this.beepsDone < 1) {
          this.beepN(1)
          this.beepsDone += 1
        }
      } else {
        this.changecolor(0)
        this.beepsDone = 0
      }
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
    color: #ecf0f1;
    font-size: 28px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 32px;
  }

  .digit {
    color: #ecf0f1;
    font-size: 32px;
    font-weight: 20;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
  .black-text {
    color: #000000;
  }
</style>