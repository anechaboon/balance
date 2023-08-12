<template>
    <div class="m-05em pl-3 mr-3 income">
        <div class="row">
            <div class="col-10">
                <h1>Income</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'incomeTransaction'"
                    :icon="`mdi-chevron-right-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>
        </div>
        <IncomeType></IncomeType>
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
``
<script>
import Keyboard from './Keyboard.vue'
import IncomeType from './IncomeType.vue'
export default {
    name: 'IncomePage',
    components: {
        Keyboard,
        IncomeType
    },
    data() {
      return {
       amount: null,
       keyAmount:'',
       incomeType: '',
       memo: ''
      }
    },
    methods:{
        save(){
            this.amount = this.keyAmount
            console.log(`log:memo`,this.memo);
            console.log(`log:incomeType`,this.incomeType);
            console.log(`log:amount`,this.amount);
            
        }
    }

}
</script>

<style>
    .m-05em{
        margin: 0.5em;
    }
    .income{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px;
    }
    .border-radius{
        border-radius: 20px;
    }
</style>