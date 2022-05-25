<template>
  <div class="col cg-col">
    <div class="card cg-card">
      <ul>
          <li>Titolo: {{item.title || item.name}}</li>
          <li>Titolo originale: {{item.original_title || item.original_name }}</li>
          <li>Lingua originale: {{item.original_language}} <span class="fi fis" :class=" [ item.original_language=== 'en'? 'fi-gb':'' , `fi-${item.original_language}`]"></span> </li>
          <li>Voto: {{item.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
name:'MovieComp',
props:{
    item:Object
},
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