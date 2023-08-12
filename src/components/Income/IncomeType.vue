<template>
  <div class="m-4 flex">
    <div class="col-4 font-2em text-center incomeType pills" @click="selectIncomeType('pills')">
        <i class="fa-solid fa-pills"></i>
    </div>
    <div class="col-4 font-2em text-center incomeType food" @click="selectIncomeType('food')">
        <i class="fa-solid fa-utensils"></i> 
    </div>
    <div class="col-4 font-2em text-center incomeType shopping" @click="selectIncomeType('shopping')">
        <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div class="col-4 font-2em text-center incomeType phone" @click="selectIncomeType('phone')">
        <i class="fa-solid fa-phone"></i>
    </div>
    <div class="col-4 font-2em text-center incomeType pea" @click="selectIncomeType('pea')">
        <i class="fa-solid fa-plug"></i>
    </div>
    <div class="col-4 font-2em text-center incomeType haircut" @click="selectIncomeType('haircut')">
        <i class="fa-solid fa-scissors"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "IncomeType",
  methods:{
    selectIncomeType(incomeType){
        this.$parent.incomeType = incomeType
        $('.incomeType').removeClass('active')
        $(`.${incomeType}`).addClass("active");
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