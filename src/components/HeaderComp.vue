<template>
  <header>
      <div class="col">
          LOGO
      </div>
      <div class="col d-flex">
          <input
          type="text" class="form-control"
          v-model="textToSearch">
          <button class="btn btn-success cg-btn"
            @click="$emit('findName' , textToSearch)">Cerca
          </button>
      </div>
  </header>
</template>

<script>
export default {
name:'HeaderComp',
data(){
    return{
        textToSearch:''
    }
},

}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    background-image: linear-gradient(black, #434343);
    .cg-btn{
        margin:0 10px;
    }
}
</style>