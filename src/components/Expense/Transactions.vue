<template>
    <div class="m-05em expense-transaction">
        <div class="row">
            <div class="col-10">
                <h1>Expense</h1>
            </div>
            <div class="col-2">
                <v-btn
                    :to="'expense'"
                    :icon="`mdi-chevron-left-circle`"
                    height="40"
                    variant="text"
                    width="40"
                ></v-btn>
            </div>

        </div>
        <div class="border-radius">
            <div class="m-05em">
                Today
            </div>
            <div class="transactions">
                <div class="row pb-3">
                    <div class="col-2">
                        <img alt="Vue logo" src="@/assets/profile.png" width="40" />
                    </div>
                    <div class="col-7">
                        <div>
                            <b>Uber</b>
                        </div>
                        <div>
                            06:56 PM
                        </div>
                    </div>
                    <div class="col-3">
                        <b>- ฿ 200</b>
                    </div>
                </div>
                <div class="row pb-3">
                    <div class="col-2">
                        <img alt="Vue logo" src="@/assets/profile.png" width="40" />
                    </div>
                    <div class="col-7">
                        <div>
                            <b>Uber</b>
                        </div>
                        <div>
                            06:56 PM
                        </div>
                    </div>
                    <div class="col-3">
                        <b>- ฿ 200</b>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
  
<script>
    export default {
    name: 'DashboardPage',

    }
</script>

<style>
    .m-05em{
        margin: 0.5em;
    }
    .expense-transaction{
        background-color: #f0bdbd;
        padding: 10px;
        border-radius: 20px;
    }
    .border-radius{
        border-radius: 20px;
    }
    .v-btn__overlay{
        background-color: unset !important;
    }
</style>
  