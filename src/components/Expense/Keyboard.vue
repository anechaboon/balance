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
      keys: [...Array(10).keys()],
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
  
  <style scoped>
.vuertual-numeric-keyboard {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
.vuertual-numeric-keyboard .btn {
  font-weight: bold;
}
.btn-keyboard {
  background-color: #80b6ff;
  color: #ffffff;
  height: 2em;
}
.btn-calculator {
  height: 2em;
}
</style>
  