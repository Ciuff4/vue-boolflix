<template>
  <div id="app">
    <HeaderComp
      @findName='findName'/>
    <div>
      <h2>Films</h2>
      <MainComp
      :items="films"/>
      <h2>Serie TV</h2>
      <MainComp
      :items="series"/>
    </div>
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
        apiUrlFilms:'https://api.themoviedb.org/3/search/movie',
        apiUrlSeries:'https://api.themoviedb.org/3/search/tv',
        paramsApiUrl:{
        api_key:'947acf8b00e4dea879763af34a10e35c',
        language:'it_IT',
        query:''
        },
        films:[],
        series:[]
      }
    },
    methods:{
      findName(textToSearch){
        this.textToSearch=textToSearch;
        this.showResults()
        console.log(textToSearch);
      },
      getApiUrlFilm(){
      axios.get(this.apiUrlFilms,{
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
      getApiUrlSeries(){
      axios.get(this.apiUrlSeries,{
        params:this.paramsApiUrl
      })
      .then(rs=>{
        this.series=rs.data.results
        console.log('series',this.series);
      })
      .catch(e=>{
        console.log(e);
      })
      },
      showResults(){
        this.paramsApiUrl.query=this.textToSearch;
        this.getApiUrlFilm();
        this.getApiUrlSeries();
      }
    },
    mounted(){
    
    }
    
}
</script>

<style lang="scss">
@import './assets/scss/general';
@import './assets/scss/utils';
@import './assets/scss/vars';

</style>
