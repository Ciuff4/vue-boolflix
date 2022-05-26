<template>
  <div class="col cg-col">
    <div class="card cg-card flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
        </div>
        <div class="flip-card-back">
          <ul>
            <li><strong>Titolo:</strong> {{item.title || item.name}}</li>
            <li><strong>Titolo originale:</strong> {{item.original_title || item.original_name }}</li>
            <li><strong>Lingua originale:</strong> {{item.original_language}} <span class="fi fis" :class=" [ item.original_language=== 'en'? 'fi-gb':'' , `fi-${item.original_language}`]"></span> </li>
            <li><strong>Voto:</strong> {{item.vote_average / 2}}
            <i v-for="i in 5" :key="i"
            :class="i<= Math.round(item.vote_average / 2) ? 'fa-solid': 'fa-regular'"
            class='fa-star'></i>"
            </li>
          </ul>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
name:'MovieComp',
props:{
    item:Object
}
}
</script>

<style lang="scss" scoped>
.cg-col{
    height: 300px;
    margin-bottom: 1rem;
    .cg-card{
    height: 100%;
    width: 100%;
    background-color: black;
    border: 1px solid #f1f1f1;
    .flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
    }
    .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    }
    &:hover{
      .flip-card-inner{
      transform: rotateY(180deg);
      }
    }
    .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    }
    img{
      width: 100%;
      height: 100%;
    }
    .flip-card-back {
    transform: rotateY(180deg);
    background-color: black;
    color: white;
    text-align: start;
    ul{
        list-style:none;
        padding-left:1rem ;
      }
    }
    
    }
}
</style>