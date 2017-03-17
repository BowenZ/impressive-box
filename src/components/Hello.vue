<template>
  <div class="face-container">
    <!-- <v-star></v-star> -->
    <div id="impress">
      <div class="step overview" id="overview" data-x="0" data-y="0" data-scale="3"></div>
      <v-face1></v-face1>
      <v-face2></v-face2>
      <div class="step face" id="face3" data-x="400" data-y="0" data-z="-400" data-rotate-y="90">
        <div class="step-container">
          <h1>3</h1>
        </div>
      </div>
      <div class="step face" id="face4" data-x="0" data-y="400" data-z="-400" data-rotate-x="-90">
        <div class="step-container">
          <h1>4</h1>
        </div>
      </div>
      <div class="step face" id="face5" data-x="-400" data-y="0" data-z="-400" data-rotate-y="-90">
        <div class="step-container">
          <h1>5</h1>
        </div>
      </div>
      <div class="step face" id="face6" data-x="0" data-y="0" data-z="-800" data-rotate-x="180">
        <div class="step-container">
          <h1>6</h1>
        </div>
      </div>
    </div>
    <div class="button-group">
      <button v-for="index in 6" @click="igoto(index)">{{index}}</button>
    </div>
  </div>
</template>
<script>
import TweenMax from 'gsap'
import $ from 'webpack-zepto'
import vStar from './star.vue'
import vFace1 from './faces/face1.vue'
import vFace2 from './faces/face2.vue'
export default {
  name: 'cube',
  components: {
    vStar,
    vFace1,
    vFace2
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    dive: function() {
      return this.$store.getters.dive
    }
  },
  created() {
    const self = this;
    const stag = document.createElement('script')
    stag.type = 'text/javascript'
    stag.src = './static/js/impress.js'
    document.body.appendChild(stag)
    stag.addEventListener('load', function() {
      var api = impress()
      api.init()

      self.$store.commit('init', api)
    })
  },
  mounted() {
    TweenMax.fromTo($('.button-group'), 1, {
      x: -100
    }, {
      x: 100,
      ease: Cubic.easeOut,
      delay: 1
    })
  },
  methods: {
    igoto: function(index) {
      this.$store.commit('goto', 'face' + index)
    }
  }
}
</script>
<style lang="scss">
h1 {
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}

body {
  background: radial-gradient(#517fa4, #243949);
}

#impress {
  .face {
    width: 800px;
    height: 800px;
    background-color: #666;
    background: radial-gradient(rgba(58, 181, 176, 1), rgba(61, 153, 190, 1));
    color: #fff;
    box-sizing: border-box;
    box-shadow: inset 0 0 50px rgba(255, 255, 255, .2);
    transition: all .3s ease-out;
    z-index: 999;
    .step-container {
      width: 100%;
      height: 100%;
      // overflow: hidden;
      // position: relative;
      transition: opacity .3s cubic-bezier(1, 0.01, 0.74, 1);
      .button-list {
        li {
          display: inline-block;
          transition: transform .2s ease-out;
          width: 150px;
          height: 60px;
          text-align: center;
          padding: 0 30px;
          margin: 20px 0;
          a {
            display: inline-block;
            width: 100%;
            background: #2195de;
            position: relative;
            text-decoration: none;
            font-size: 24px;
            line-height: 60px;
            transform-style: preserve-3d;
            transition: transform .2s ease-out;
            span {
              // position: relative;
              display: inline-block;
              transform-origin: 50% 0;
              transition: transform 0.3s;
              &:after {
                content: attr(data-hover);
                top: 100%;
                left: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: red;
                line-height: 100px;
                text-align: center;
                transform: rotateX(-90deg);
                transform-origin: 50% 0;
              }
            }
            &:hover {
              color: red;
              transform: rotateX(90deg) translateY(-40px);
            }
          }
        }
      }
    }
    &.past>.step-container {
      opacity: 0;
    }
  }
  .face-content {
    // display: none;
    opacity: 0;
    transition: all 1s cubic-bezier(1, 0.01, 0.74, 1);
    &.active {
      opacity: 1;
    }
  }
}

.button-group {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
}
</style>
