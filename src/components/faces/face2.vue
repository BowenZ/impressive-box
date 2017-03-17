<template>
  <div>
    <div class="step face" id="face2" data-x="0" data-y="-400" data-z="-400" data-rotate-x="90">
      <div class="step-container">
        <article>
          <h1>{{title}}</h1>
          <p>The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.</p>
        </article>
        <ul>
          <li v-for="index in 6">
            <a href="#" @click.prevent="igoto(index)">goto face{{index}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: 'Welcome2!'
    }
  },
  methods: {
    igoto: function(index) {
      this.$store.commit('goto', 'face' + index)
    }
  }
}
</script>
<style lang="scss">
#face2{
  .step-container{
    h1{
      font-size: 80px;
    }
    p{
      font-size: 30px;
    }
    ul{
      li{
        font-size: 30px;
      }
    }
  }
}
.face2-content {
  padding: 100px;
  h1 {
    text-align: center;
    font-size: 80px;
  }
  ul {
    list-style: none;
  }
}
</style>
