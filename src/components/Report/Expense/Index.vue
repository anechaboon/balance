<template>
    <div class="m-05em mx-2">
        <div class="p-2 border-radius pink">
            <div class="row">
                <div class="col-10">
                    <h1>Report Expense</h1>
                </div>
            </div>
            <VueDatePicker range v-model="date" :placeholder="'select range date'" format="yyyy-MM-dd"> </VueDatePicker>
            <ExpenseType></ExpenseType>
        </div>
        <button class="btn btn-primary" @click="report">Report</button>

    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import ExpenseType from '../../Expense/ExpenseType.vue'
import moment from "moment";
export default {
    name: 'page_index',
    components:{
        VueDatePicker,
        ExpenseType
    },
    data() {
      return {
        date: [],
        expenseCategoryId: null
      };
    },
    mounted(){
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        this.date.value = [startDate, endDate];
    },
    methods:{
        report(){
            let startDate = moment(this.date[0]).format('YYYY-MM-DD H:mm:ss');
            let endDate = moment(this.date[1]).format('YYYY-MM-DD H:mm:ss');
            
            console.log(`log:date-start`, startDate);
            console.log(`log:date-end`, endDate);
            console.log(`log:expenseCategoryId`,this.expenseCategoryId);
        }
    }
}
</script>

<style>
</style>