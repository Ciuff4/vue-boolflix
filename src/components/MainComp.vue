<template>
  <main class="container">
    <div class="row row-cols-5 ">
      <MovieComp v-for ="( item , index ) in items" :key="`items${index}`"
      :item="item"/>
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
  items:Array
},



}
</script>

<style lang="scss" scoped >
.cg-row{
  flex-wrap: wrap;
}
</style>