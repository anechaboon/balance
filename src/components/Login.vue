<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="p-4">
      <h2 class="mb-3">Login</h2>
      <form>
        <div class="mb-3">
          <label for="email">Email:</label>
          <input class="form-control" v-model="email" type="email" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password">Password:</label>
          <input class="form-control" v-model="password" type="password" id="password" required>
        </div>

        <ladda
            text="Login"
            :loading="loading"
            :btn-class="'btn btn-primary w-100'"
            @click="login()"
        />
        <a href="/register">
          <button type="button" class="btn btn-success w-100 mt-3">Registers</button>
        </a>
      </form>
    </div>
  </template>
  
<script>

import Api from '@/services/endpoint/tenant.service'
import Ladda from '@/plugins/Ladda.vue';

export default {
    components: {
        Ladda
    },
    data() {
      return {
        email: '',
        password: '',
        loading: false,
      };
    },
    beforeCreate(){
      let balanceUserId = localStorage.getItem(`balanceUserId`)
      if(balanceUserId != null){
        window.location.href = '/';
      }
    },
    methods: {
      async login() {
        this.loading = true;

        if (!this.email || !this.password) {
          return;
        }else{
          let credentials = {
              email: this.email,
              password: btoa(this.password),
          }
          try {
              await Api.Authorization.login(credentials).then(async (response) => {
                localStorage.setItem(`balanceUserId`, response.data.id);
                // localStorage.setItem('balanceUserId',response.data.id);
                localStorage.setItem('walletId',response.data.default_wallet_id);
                localStorage.setItem('image_url',response.data.image_url);
                localStorage.setItem('name',response.data.full_name);
                window.location.href = '/';
              }).catch(error => {
                  console.log('log:',error);
              });
          } catch (error) {
            console.log(`log:error.response`,error.response);
          }
          this.loading = false;

        }
      },
    },
  };
</script>
  