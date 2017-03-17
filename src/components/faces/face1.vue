<template>
  <div>
    <div class="step face" id="face1">
      <div class="step-container">
        <article>
          <h1 @click="igoto">{{title}}</h1>
          <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
  If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.</p>
        </article>
        <ul class="button-list">
          <li v-for="index in 6">
            <a href="#" @click.prevent="igoto(index)" :data-hover="'goto face' + index">
              <span>goto face{{index}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="step face-content face1-content" id="content1" data-x="0" data-y="0" data-z="0" data-scale="0.3">
        <div class="step-container">
          <h1>1-1</h1>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    data: function(){
      return {
        title: 'Welcome!'
      }
    },
    methods: {
      igoto: function(){
        this.$store.commit('goto', 'content1')
      }
    }
  }
</script>

<style lang="scss">
  #face1{
    padding: 50px;
    h1{
      font-size: 50px;
      margin: 0 0 30px;
    }
  }
  .face1-content{
    padding: 100px;
    width: 800px;
    height: 800px;
    h1{
      text-align: center;
      font-size: 80px;
    }
  }
</style>