<template>
    <div>
        <ExpenseType></ExpenseType>
        <div class="p-2">
            <input type="text" v-model="memo" class="form-control m-1" placeholder="Enter MEMO">
            <input
            type="number"
            class="form-control m-1"
            v-model="keyAmount"
            id="txtBox"
            placeholder="Press any button"
            />
            <Keyboard class="m-1" @pressed="keyAmount = $event" :selfValue="keyAmount"></Keyboard>
            <button class="btn btn-primary w-100" @click="save">SAVE</button>
        </div>
        
    </div>
</template>

<script>
import Keyboard from './Keyboard.vue'
import ExpenseType from './ExpenseType.vue'
export default {
    name: 'ExpensePage',
    components: {
        Keyboard,
        ExpenseType
    },
    data() {
      return {
       amount: null,
       keyAmount:'',
       expenseType: '',
       memo: ''
      }
    },
    methods:{
        save(){
            this.amount = this.keyAmount
            console.log(`log:memo`,this.memo);
            console.log(`log:expenseType`,this.expenseType);
            console.log(`log:amount`,this.amount);
            
        }
    }

}
</script>

<style>
    
</style>