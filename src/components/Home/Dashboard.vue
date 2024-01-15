<!-- eslint-disable vue/require-v-for-key -->

<template>
    <div class="m-05em mx-2">
        <div class="p-2 border-radius pink">
            <div class="d-flex mb-1">
                <div class="col-3">
                    <label class="float-end pr-2">Wallet :</label>
                </div>
                <div class="col-9">
                    <div v-if="options.length > 0">
                        <select class="form-control" name="" id="">
                            <option v-for="option in options" :value="option.id" >{{ option.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="d-flex mb-1">
                <div class="col-3">
                    <label class="float-end pr-2">Date :</label>
                </div>
                <div class="col-9">
                    <VueDatePicker v-model="date" range type="date" format="yyyy-MM-dd" ></VueDatePicker>
                </div>
            </div>
            <div class="d-flex mt-2 mb-1">
                <div class="col-12">
                    <button class="btn btn-primary w-100" @click="search()">Search</button>
                </div>
            </div>
            <div class="d-flex mb-1" v-if="balance">
                <div class="col-3">
                    <label class="float-end pr-2">Balance :</label>
                </div>
                <div class="col-9">
                    {{ $filters.formatNumber(balance) }}
                </div>
            </div>
            <div class="d-flex mb-1">
                <div class="col-3">
                    <label class="float-end pr-2">Spend :</label>
                </div>
                <div class="col-9">
                    {{ $filters.formatNumber(spendTotal) }}
                </div>
            </div>
            <div class="d-flex mb-1" v-if="average">
                <div class="col-3">
                    <label class="float-end pr-2">Average :</label>
                </div>
                <div class="col-9">
                    {{ $filters.formatNumber(average) }}
                </div>
            </div>
            
            <div>
                <Bar
                    :key="chartKey"
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                />
            </div>
           
            
        </div>
    </div>
</template>

<script>
import Api from '@/services/endpoint/tenant.service'
import VueDatePicker from '@vuepic/vue-datepicker';
import moment from "moment";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'dashboard_index',
    components:{
        VueDatePicker,
        Bar
    },
    data() {
      return {
        walletId: parseInt(localStorage.getItem('walletId')),
        searchDate: '',
        date: '',
        options: [],
        chartKey: 0,
        chartData: {
            labels: [],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: []
                }
            ],

        },
        chartOptions: {
            responsive: true
        },
        average: 0
      };
    },
    mounted(){
        this.getWallet()
        console.log(`🚀 log:chartData.datasets`, this.chartData.datasets[0].data)
        this.search()
    },
    // computed: {
    //   chartData() { return /* mutable chart data */ },
    // },
    methods:{
        async getWallet(){
            let res = await Api.Wallet.getWallets();
            let val = []
            for(let i in res.data){
                val.push({
                    id: res.data[i].id,
                    name: res.data[i].title,
                })
            }
            this.options = val
        },

        async search(){
            
            let param = null
            let diffDays = null
            if(this.date == ''){
                console.log(`🚀 log:empry.date`)
                param = {
                    wallet_id: this.walletId,
                }
            }else{
                let startDateFormated = moment(this.date[0]).format('YYYY-MM-DD 00:00:00');
                let endDateFormated = moment(this.date[1]).format('YYYY-MM-DD 00:00:00');

                param = {
                    wallet_id: this.walletId,
                    start_date: startDateFormated,
                    end_date: endDateFormated
                }
            }

            const res = await Api.Home.Report(param)
            console.log(`🚀 log:res`,res )


            console.log(`🚀 log:chartData`, this.chartData)

            let spendTotal = 0
            if(res){

                let date1 = new Date(res.data.startDate)
                let date2 = new Date(res.data.endDate)

                console.log(`🚀 log:date1`, date1)
                console.log(`🚀 log:date2`, date2)

                let timeDiff = Math.abs(date2.getTime() - date1.getTime())
                diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
                console.log(`🚀 log:diffDays`,diffDays )

                let labels = []
                let data = []

                for(let i in res.data.data){
                    let item = res.data.data[i]
                    if(!labels.includes(item.expense_category.name)){
                        labels.push(item.expense_category.name)
                    }
                    data.push(item.amount)
                    spendTotal += item.amount
                }
                this.chartData.labels = labels
                this.chartData.datasets[0].data = data
                this.spendTotal = spendTotal
                if(diffDays){
                    this.average = this.spendTotal / diffDays
                }  
                this.balance = res.data.wallet.balance 
            }

            this.chartKey += 1;

            
        }
    }
}
</script>

<style>
</style>