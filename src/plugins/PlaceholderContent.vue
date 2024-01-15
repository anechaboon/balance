<template>
    <div 
      v-if="isLoad" 
      class="box-placeholder p-4"
    >
    <code-loader
        :width="600"
        :height="100"
        :speed="2"
        :animate="true"
        >
    </code-loader>
    </div>
  </template>
  
  <script>
  import { CodeLoader } from 'vue-content-loader';
  export default {
    components:{
        CodeLoader
    },
      props: {
          isLoad : {
              type: String,
              default: null
          },
      },
  }
  </script>
  