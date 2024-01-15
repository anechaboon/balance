<template>
    <placeholder-content is-load="true" v-if="onload" />
    <div class="m-05em mx-2" v-else>
        <div class="p-2 border-radius pink">
            <div class="row">
                <div class="col-2">
                    <v-btn
                        :icon="`mdi-chevron-left-circle`"
                        height="40"
                        variant="text"
                        width="40"
                        @click="preWallet()"
                        :disabled="indexId==0"
                    ></v-btn>
                </div>
                <div class="col-8 text-center">
                    <h1>{{ wallet.title }}</h1>
                </div>
                <div class="col-2">
                    <v-btn
                        :icon="`mdi-chevron-right-circle`"
                        height="40"
                        variant="text"
                        width="40"
                        @click="nextWallet()"
                        :disabled="indexId==walletListId.length-1"
                    ></v-btn>
                </div>
            </div>
            <div class="py-2 pr-2" id="all-check-list">
                <div class="form-check pb-1 d-flex col-12 p-0 pt-2" v-for="item in checkList" :key="item.id">
                    <div class="col-1 mr-1 mt-1">
                        <input 
                            class="form-control checkbox-size-1" 
                            type="checkbox" 
                            v-model="item.checked"
                            @click="checkedList"
                        >
                    </div>
                    <div class="col-7">
                        <input class="form-control" type="text" v-model="item.memo" :disabled="item.checked == 1" placeholder="item" @change="keyCheckList()">
                    </div>
                    <div class="col-3 mr-1 ml-1">
                        <input class="form-control" type="number" v-model="item.amount" :disabled="item.checked == 1" placeholder="amount" @change="keyCheckList()">
                    </div>
                    <div class="col-1 pt-1">
                        <i class="fa-solid fa-circle-minus text-danger" :style="'font-size: 25px;'" @click="removeItem(item.id)"></i>
                    </div>
                </div>
                <div class="form-check pt-2 pl-1 d-flex">
                    <div class="col-6">
                        <i class="fa-solid fa-circle-plus text-primary col-6" :style="'font-size: 30px;'" @click="addItem" v-show="walletId != 0"></i>
                    </div>
                    <div class="col-6 row">
                        <div class="float-left col-4">Total:</div>
                        <div class="float-right col-8">{{ total }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex pt-2">
            <div class="col-2">
                <button class="btn btn-success" @click="saveCheckList()">Save</button>
            </div>
            <div class="col-8"></div>
            <div class="col-2">
                <button class="btn btn-primary" @click="buy()" v-show="walletId != 0">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/services/endpoint/tenant.service'
import PlaceholderContent from "@/plugins/PlaceholderContent";
import moment from "moment";

export default {
    name: 'CheckList',
    components:{
        PlaceholderContent
    },
    data() {
        return {
            onload: true,
            total: 0,
            checkList: [],
            checked: true,
            walletId: parseInt(localStorage.getItem('walletId')),
            indexId: 0,
            wallet: {},
            walletListId: [],
        }
    },
    async mounted(){
        await this.feedData();

        this.getWallets()
        this.onload = false
    },
    methods:{
        async feedData(changWallet = false){
            // eslint-disable-next-line no-unused-vars
            const queryString = `?sort=desc&walletId=${this.walletId}`;
            let res = await Api.CheckList.get(queryString);
            if(res.data.length > 0){
                for(let i in res.data){
                    let value = res.data[i]
                    if (value.checked == 1) {
                        value.checked = true;
                    }
                }
            }
            
            let checkListLocalStorage = false
            let obj = localStorage.getItem(`checkListData${this.walletId}`)

            if(obj == '' || obj == null || obj == 'null' || obj == undefined || (obj != undefined && obj.length == 0)){
                checkListLocalStorage = undefined
                localStorage.removeItem(`checkListData${this.walletId}`);
            }else{
                checkListLocalStorage = JSON.parse(obj);
            }
            
            if(this.walletId == 0){
                checkListLocalStorage = await this.getAllWallet()
            }
            if(res.data[0] != undefined && checkListLocalStorage != undefined && this.walletId > 0){
                const date1 = new Date(res.data[0].created_date)
                const date2 = new Date(checkListLocalStorage[0].created_date)
                if (date2 > date1){
                    this.checkList = checkListLocalStorage;
                }else{
                    this.checkList = res.data;
                }
                changWallet = false
            }else if(res.data[0] != undefined && this.walletId > 0){
                this.checkList = res.data;
            }else if(checkListLocalStorage != undefined){
                this.checkList = checkListLocalStorage;
            }
            if(changWallet && checkListLocalStorage == undefined){
                this.checkList = res.data;
            }

            if(this.checkList.length > 0){
                this.calculateTotal()
            }

        },
        async calculateTotal(){
            let total = 0
            for(let i in this.checkList){
                let item = this.checkList[i]
                if(item.amount != undefined && item.amount != '' && item.amount != null){
                    let amount = parseFloat(item.amount)
                    total += parseFloat(amount)
                }
            }
            this.total = total
        },
        async getAllWallet(){
            let keepLocalStorage = []
            if(this.walletId == 0){
                for(let i in this.walletListId){
                    let val = localStorage.getItem(`checkListData${this.walletListId[i].id}`)
                    if(val != null){
                        val = JSON.parse(val)
                        keepLocalStorage = [...keepLocalStorage, ...val]
                    }
                }
            }
            return keepLocalStorage
        },
        async buy(){
            const filteredChecked = this.checkList.filter(item => item.checked == true);
            let param = {
                wallet_id : this.walletId,
                check_list: JSON.parse(JSON.stringify(filteredChecked))
            }
            const res = await Api.CheckList.buy(param);
            if(res){
                const removeChecked = this.checkList.filter(item => item.checked != true);
                const data = JSON.stringify(removeChecked)
                localStorage.setItem(`checkListData${this.walletId}`, data);
                this.checkList = removeChecked
            }
        },
        async saveCheckList(){
            let param = {
                wallet_id: this.walletId,
                check_list: JSON.parse(JSON.stringify(this.checkList))
            }
            setTimeout(function(){
                Api.CheckList.add(param);
            },30);
            
        },
        checkedList(){
            let ref = this
            if(ref.walletId > 0){
                setTimeout(function(){
                    let json = JSON.stringify(ref.checkList)
                    localStorage.setItem(`checkListData${ref.walletId}`, json);
                },30);
            }else{
                setTimeout(function(){
                    ref.updateCheckList()
                },30);
            }
            
        },
        async updateCheckList(){
            let dataKey = ''
            for (let i in this.checkList) {
                let itemFromCheckList = this.checkList[i];
                dataKey = `checkListData${itemFromCheckList.wallet_id}`;
                let dataFromStorage = JSON.parse(localStorage.getItem(dataKey)) || []; // Initialize as an empty array if data doesn't exist

                const index = dataFromStorage.findIndex((val) => val.id === itemFromCheckList.id);
                if (index >= 0) {
                    // Modify the properties of the object as needed
                    dataFromStorage[index].memo = itemFromCheckList.memo;
                    dataFromStorage[index].amount = itemFromCheckList.amount;
                    dataFromStorage[index].checked = itemFromCheckList.checked;
                    dataFromStorage[index].status = itemFromCheckList.status;
                } else {
                    dataFromStorage.push(itemFromCheckList)
                }

                // remove 
                dataFromStorage = dataFromStorage.filter(function(itemFromCheckList) {
                    return itemFromCheckList.status == '1'
                })

                // Update the dataFromStorage back into localStorage
                localStorage.setItem(dataKey, JSON.stringify(dataFromStorage));

            }

            if(this.walletId == 0){
                this.checkList = await this.getAllWallet()
                
            }else{
                this.checkList = JSON.parse(localStorage.getItem(dataKey))
            }
        },
        addItem(){
            this.checkList.push({
                id: this.generateString(5).trim(),
                memo: '',
                amount: '',
                checked: false,
                user_id: localStorage.getItem(`balanceUserId`),
                wallet_id: this.walletId,
                status: '1'
            })
        },
        keyCheckList(){
            var total = 0
            let self = this
            // this.checkList.forEach(function(item) {
            //     if(item.amount != '' && item.amount != null){
            //         let amount = parseFloat(item.amount)
            //         total += parseFloat(amount)
            //     }
            // });

            const createdDate = moment(new Date()).format('YYYY-MM-DD H:mm:ss');
            for(let key = 0; key < this.checkList.length; key++) {
                this.checkList[key].created_date = createdDate
            }
            this.total = total
            // localStorage.setItem(`checkListData${this.walletId}`, JSON.stringify(this.checkList));
            setTimeout(function(){
                self.updateCheckList()
                self.calculateTotal()

            },10);
        },
        removeItem(id){
            const index = this.checkList.findIndex((val) => val.id === id);

            if (index >= 0) {
                this.checkList[index].status = 0;
            }
            this.keyCheckList()
        },
        generateString(length) {
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        async getWallets(){
            let res = await Api.Wallet.getWallets();
            if(res.status == 200){
                this.walletList = res.data
                let walletListId = [{
                    id: 0,
                    title: 'All'
                }]
                this.wallet = res.data.find(obj => obj.id == this.walletId)
                res.data.forEach(function(value) {
                    walletListId.push({
                        id: value.id,
                        title: value.title
                    })
                });
                this.walletListId = walletListId
                let self = this
                this.indexId = this.walletListId.findIndex((val) => val.id == self.walletId)
                
            }
        },
        async preWallet(){
            let self = this
            this.indexId -= 1
            this.wallet = this.walletListId[this.indexId]
            this.walletId = this.wallet.id
            setTimeout(function(){
                self.feedData(true);
            },30);        },
        async nextWallet(){
            let self = this
            this.indexId += 1
            this.wallet = this.walletListId[this.indexId]
            this.walletId = this.wallet.id
            setTimeout(function(){
                self.feedData(true);
            },30);
        }
    },
}
</script>

<style>
    .checkbox-size-1{
        width: 1.5em;
        height: 1.5em;
    }
</style>