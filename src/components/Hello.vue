<template>
  <div class="hello-container" @keyup="goRight">
    <!-- <v-star></v-star> -->
    <div id="impress">
      <div class="step overview" id="overview" data-x="0" data-y="0" data-scale="3"></div>
      <div class="step hello">
        <div class="inner">
          <h1>1</h1>
        </div>
      </div>
      <div class="step hello" data-x="0" data-y="-400" data-z="-400" data-rotate-x="90">
        <div class="inner">
          <h1>2</h1>
        </div>
      </div>
      <div class="step hello" data-x="400" data-y="0" data-z="-400" data-rotate-y="90">
        <div class="inner">
          <h1>3</h1>
        </div>
      </div>
      <div class="step hello" data-x="0" data-y="400" data-z="-400" data-rotate-x="-90">
        <div class="inner">
          <h1>4</h1>
        </div>
      </div>
      <div class="step hello" data-x="-400" data-y="0" data-z="-400" data-rotate-y="-90">
        <div class="inner">
          <h1>5</h1>
        </div>
      </div>
      <div class="step hello" data-x="0" data-y="0" data-z="-800" data-rotate-x="180">
        <div class="inner">
          <h1>6</h1>
        </div>
      </div>
    </div>
    <button @click="igoto(1)">1</button>
    <button @click="igoto(2)">2</button>
    <button @click="igoto(3)">3</button>
    <button @click="igoto(4)">4</button>
    <button @click="igoto(5)">5</button>
    <button @click="igoto(6)">6</button>
  </div>
</template>
<script>
import vStar from './star.vue'
export default {
  name: 'hello',
  components: {
    vStar
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      impress: null
    }
  },
  mounted() {
    const self = this;
    const stag = document.createElement('script')
    stag.type = 'text/javascript'
    stag.src = './static/js/impress.js'
    document.body.appendChild(stag)
    stag.addEventListener('load', function() {
      self.impress = impress()
      self.impress.init()
    })
  },
  methods: {
    igoto: function(index){
      this.impress.goto(index)
    },
    goRight: function(){
      console.log('=========')
      // this.impress.goto(3)
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
  background: radial-gradient(#0092d8, rgb(18, 51, 68));
}

#impress {
  .hello {
    width: 800px;
    height: 800px;
    background-color: #666;
    background: radial-gradient(#1f3a47, #0b1114);
    // border: 1px solid #000;
    color: #fff;
    font-size: 50px;
    box-sizing: border-box;
    box-shadow: inset 0 0 50px rgba(255,255,255,.6);
  }
}
</style>
