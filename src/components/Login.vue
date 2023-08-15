<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="p-4">
      <h2 class="mb-3">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email">Email:</label>
          <input class="form-control" v-model="email" type="email" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password">Password:</label>
          <input class="form-control" v-model="password" type="password" id="password" required>
        </div>

        <button class="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  </template>
  
<script>
import Cookies from 'js-cookie'
import Api from '@/services/endpoint/tenant.service'

export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        if (!this.email || !this.password) {
          // แสดงข้อความหรือดำเนินการตามที่คุณต้องการ
          return;
        }else{

            let credentials = {
                email: this.email,
                password: btoa(this.password),
            }
            
            let res = await Api.Authorization.login(credentials);

            if(res){
                let userId = res.data.id
                Cookies.set('balanceUserId',userId);
                window.location.href = '/';
            }

        }
  
        // ดำเนินการเข้าสู่ระบบหรือทำสิ่งที่ต้องการ
        // แล้ว redirect ไปยังหน้า dashboard หรืออื่น ๆ
      },
    },
  };
</script>
  