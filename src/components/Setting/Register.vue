<template>
   <div class="p-4">
      <h2 class="mb-3">Register</h2>
      <form>
        <div class="mb-3">
          <label for="email">Full Name:</label>
          <input class="form-control" v-model="fullName" type="text" id="full_name" required>
        </div>
        <div class="mb-3">
          <label for="email">Email:</label>
          <input class="form-control" v-model="email" type="email" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password">Password:</label>
          <input class="form-control" v-model="password" type="password" id="password" required>
        </div>
        <div >
          <label for="password">Confirm Password:</label>
          <input class="form-control" v-model="confrimPassword" type="password" id="password" required>
        </div>
        <div class="" v-show="!validatePassword">
            <p class="text-danger mb-0">* password not match</p>
        </div>
        <ladda
            text="Register"
            :loading="loading"
            :btn-class="'btn btn-primary w-100 mt-3'"
            @click="register()"
        />

      </form>
    </div>
</template>

<script>
import Ladda from '@/plugins/Ladda.vue';
import Api from '@/services/endpoint/tenant.service'

export default {
    name: 'RegisterPage',
    components:{
        Ladda
    },
    data() {
      return {
        validatePassword: true,
        email: '',
        fullName: '',
        password: '',
        confrimPassword: null,
      };
    },
    mounted(){
    },
    methods:{
        async register() {
            this.loading = true;

            if(this.password === this.confrimPassword){
                this.validatePassword = true

                if (!this.email || !this.password) {
                    return;
                }else{
                    let param = {
                        full_name: this.fullName,
                        email: this.email,
                        password: btoa(this.password),
                    }
                    try {
                        await Api.Authorization.register(param).then(async (response) => {
                            localStorage.setItem(`balanceUserId`, response.data.id);
                            window.location.href = '/';
                        }).catch(error => {
                            console.log('log:',error);
                        });
                    } catch (error) {
                        console.log(`log:error.response`,error.response);
                    }
                    this.loading = false;

                }
            }else{
                this.validatePassword = false
                this.loading = false;

            }
            
        },

        
    }
}
</script>

<style>
</style>