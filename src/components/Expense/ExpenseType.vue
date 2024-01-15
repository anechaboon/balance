<template>
  <div class="mt-4 ml-4 mr-4 mb-2 flex">
    <div class="col-4 font-2em text-center expenseType"  v-for="item in expenseTypes" :key="item.id" :class="item.title" @click="selectExpenseType(item)">
        <i :class="item.icon"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Api from '@/services/endpoint/tenant.service'

export default {
  name: "ExpenseType",
  data() {
    return {
      expenseTypes: []
    };
  },
  async mounted(){
    await this.feedData()
    this.selectExpenseType(this.expenseTypes[0])

  },
  methods:{
    selectExpenseType(expenseCate){
        this.$parent.expenseCategoryId = expenseCate.id
        $('.expenseType').removeClass('active')
        $(`.${expenseCate.title}`).addClass("active");
    },
    async feedData(){
      let res = await Api.ExpenseCategories.getExpenseCategories();
      if(res){
        this.expenseTypes = res.data
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