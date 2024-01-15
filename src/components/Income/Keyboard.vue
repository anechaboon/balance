<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <number-pad></number-pad>
</template>
  
  <script>
import "bootstrap/dist/css/bootstrap.min.css";
import NumberPad from '@/plugins/NumberPad.vue';

export default {
  props: ["selfValue"],
  components:{
    NumberPad
  },
  data() {
    return {
      keyAmount: "",
      keyTheme: "btn-keyboard",
      buttonTheme: "btn-danger",
    };
  },
  methods: {
    press(key) {
      this.keyAmount = `${this.keyAmount}${key}`;
    },
    clear(type) {
      if (type === "all") this.keyAmount = "";
      else this.keyAmount = this.keyAmount.substring(0, this.keyAmount.length - 1);
    },
  },
  watch: {
    keyAmount() {
      this.$emit("pressed", this.$filters.formatNumber(this.keyAmount));
    },
    selfValue() {
      this.keyAmount = this.selfValue;
    },
  },
  created() {
  },
};
</script>