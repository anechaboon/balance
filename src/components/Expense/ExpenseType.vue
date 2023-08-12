<template>
  <div class="m-4 flex">
    
    <div class="col-4 font-2em text-center expenseType pills" @click="selectExpenseType('pills')">
        <i class="fa-solid fa-pills"></i>
    </div>
    <div class="col-4 font-2em text-center expenseType food" @click="selectExpenseType('food')">
        <i class="fa-solid fa-utensils"></i> 
    </div>
    <div class="col-4 font-2em text-center expenseType shopping" @click="selectExpenseType('shopping')">
        <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div class="col-4 font-2em text-center expenseType phone" @click="selectExpenseType('phone')">
        <i class="fa-solid fa-phone"></i>
    </div>
    <div class="col-4 font-2em text-center expenseType pea" @click="selectExpenseType('pea')">
        <i class="fa-solid fa-plug"></i>
    </div>
    <div class="col-4 font-2em text-center expenseType haircut" @click="selectExpenseType('haircut')">
        <i class="fa-solid fa-scissors"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "ExpenseType",
  methods:{
    selectExpenseType(expenseType){
        this.$parent.expenseType = expenseType
        $('.expenseType').removeClass('active')
        $(`.${expenseType}`).addClass("active");
    }
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