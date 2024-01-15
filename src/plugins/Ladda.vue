<template>
    <button
      type="button"
      :class="['btn btn-ladda btn-ladda-spinner ladda-button ', btnClass ? btnClass: '' ]"
      data-style="expand-left"
      :data-loading="loading"
      :disabled="loading || disabled"
    >
      <span class="ladda-label">
        <span
          class="mr-1"
          v-if="icon && !loading"
          v-html="icon"
        />
        {{ text ? text : $t('ladda') }}
        <span v-if="count">
          ({{ count }})
        </span>
      </span>
      <slot name="append-text" />
      <span class="ladda-spinner">
        <div
          v-if="loading"
          id="loading2"
        />
      </span>
    </button>
  </template>
  
  <script>
      export default {
          // eslint-disable-next-line vue/multi-word-component-names
          name: 'Ladda',
          props: ['loading', 'text', 'icon', 'btnClass', 'type','disabled','count']
      }
  </script>
  
  <style scoped>
  #loading2 {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid rgba(255, 255, 255, 1);
      border-radius: 50%;
      border-top-color: #888;
      animation: spin 1s ease-in-out infinite;
      -webkit-animation: spin 1s ease-in-out infinite;
  }
  
  .btn-ladda[data-style=expand-left] .ladda-spinner {
      left: 15px;
  }
  
  .btn-ladda .ladda-spinner {
      top: calc(50% - (15px / 2));
  }
  
  @keyframes spin {
      to {
          -webkit-transform: rotate(360deg);
      }
  }
  
  @-webkit-keyframes spin {
      to {
          -webkit-transform: rotate(360deg);
      }
  }
  </style>
  