<template>
  <div id="app">
    <HeaderComp
      @findName='findName'/>
    <MainComp
    
    :films="films"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from "axios";

export default {
    name: "App",
    components: { HeaderComp, MainComp },
    data(){
      return{
        textToSearch:'',
        apiUrl:'https://api.themoviedb.org/3/search/movie',
        paramsApiUrl:{
        api_key:'947acf8b00e4dea879763af34a10e35c',
        language:'it_IT',
        query:''
        },
        films:[]
      }
    },
    methods:{
      findName(textToSearch){
        this.textToSearch=textToSearch;
        this.showResults()
        console.log(textToSearch);
      },
      getApiUrl(){
      axios.get(this.apiUrl,{
        params:this.paramsApiUrl
      })
      .then(r=>{
        this.films=r.data.results
        console.log('films',this.films);
      })
      .catch(e=>{
        console.log(e);
      })
      },
      showResults(){
        this.paramsApiUrl.query=this.textToSearch;
        this.getApiUrl();
      }
    },
    mounted(){
    
    }
    
}
</script>

<style lang="scss">
@import './assets/scss/general';
@import './assets/scss/utils';
@import './assets/scss/vars'

</style>
