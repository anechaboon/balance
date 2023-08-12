<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="vuertual-numeric-keyboard bg-light rounded border p-3">
    <button
      v-for="key in keys"
      :key="key"
      @click="press(key)"
      class="btn btn-lg shadow-none"
      :class="keyTheme"
    >
      {{ key }}
    </button>
    <button
      class="btn btn-lg shadow-none"
      :class="buttonTheme"
      @click="clear()"
    >
      &larr;
    </button>
    <button
      class="btn btn-lg shadow-none"
      :class="buttonTheme"
      @click="clear('all')"
    >
      C
    </button>
  </div>
</template>
  
  <script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  props: ["selfValue"],
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
      this.$emit("pressed", this.keyAmount);
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
}
</style>
  