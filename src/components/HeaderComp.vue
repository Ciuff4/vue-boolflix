<template>
  <header>
      <div class="col">
          <img src="../assets/img/netflix-logo-0.png" alt="">
      </div>
      <div class="col d-flex">
          <input
          type="text" class="form-control"
          v-model="textToSearch">
          <button class="btn btn-danger cg-btn"
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
    img{
        width: 30%;
        padding-left: 10px;
    }
    
    .cg-btn{
        margin:0 10px;
    }
}
</style>