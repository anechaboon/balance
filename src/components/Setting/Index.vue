<template>
    <div class="m-05em mx-2">
        <div class="row bg-white">
            <div class="border-radius mb-5">
                <div class="menu">
                    <div class="d-flex pink p-2 my-1 border-radius" @click="logout">
                        <center>
                            Logout
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingPage',
    methods:{
        logout(){
            localStorage.removeItem(`balanceUserId`);
            location.reload();
        }
    }

}
</script>

<style>
    
</style>