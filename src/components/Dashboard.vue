<template>
    <div class="m-05em dashboard">
        <div class="pl-2em h-40">
            <div class="pb-2em">
                <img alt="Vue logo" src="@/assets/profile.png" width="40" />
                <h3>Anecha Boonthongdee</h3>
            </div>
            <div class="balance">
                <p>Available balance</p>
                <h1>฿ <b>90,000.00</b></h1>
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
    .dashboard{
        background-color: #bdf0da;
        padding: 10px;
        border-radius: 20px 20px;
    }
</style>
  