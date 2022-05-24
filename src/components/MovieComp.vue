<template>
  <div class="col cg-col">
    <div class="card cg-card">
      <ul>
          <li>Titolo: {{film.title}}</li>
          <li>Titolo originale: {{film.original_title}}</li>
          <li>Lingua originale: {{film.original_language}} <span class="fi fis" :class="`fi-${film.original_language}`"></span> </li>
          <li>Voto: {{film.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
name:'MovieComp',
props:{
    film:Object
}
}
</script>

<style lang="scss" scoped>
.cg-col{
    height: 200px;
    margin-bottom: 1rem;
    .cg-card{
    height: 100%;
    overflow-y: auto;
    ul{
        list-style:none;
        padding-left:1rem ;
    }
    }
}
</style>