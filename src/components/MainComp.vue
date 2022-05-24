<template>
  <main class="container">
    <div class="row row-cols-5 ">
      <MovieComp v-for ="( film , index ) in films" :key="`films${index}`"
      :film="film"/>
    </div>
  </main>
</template>

<script>
import MovieComp from "./MovieComp.vue";


export default {
name:'MainComp',

components:{MovieComp},

props:{
  //textToSearch:String,
  films:Array
},



}
</script>

<style lang="scss" scoped >
.cg-row{
  flex-wrap: wrap;
}
</style>