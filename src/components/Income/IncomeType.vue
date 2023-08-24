<template>
  <div class="m-4 flex">
    <div class="col-4 font-2em text-center incomeType" v-for="item in incomeTypes" :key="item.id" :class="item.title" @click="selectIncomeType(item)">
        <i :class="item.icon"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Api from '@/services/endpoint/tenant.service'

export default {
  name: "IncomeType",
  data() {
    return {
      incomeTypes: []
    };
  },
  mounted(){
    this.feedData()
  },
  methods:{
    selectIncomeType(incomeCate){
        this.$parent.incomeCategoryId = incomeCate.id
        $('.incomeType').removeClass('active')
        $(`.${incomeCate.title}`).addClass("active");
    },
    async feedData(){
      let res = await Api.IncomeCategories.getIncomeCategories();
      if(res){
        this.incomeTypes = res.data
      }
    },
    
  }
};
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.font-2em {
  font-size: 2em;
}
.active{
  background-color: #80b6ff;
  border-radius: 20px 20px;
}
</style>