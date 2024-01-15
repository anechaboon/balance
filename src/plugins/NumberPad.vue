<template>
    <div class="vuertual-numeric-keyboard bg-light rounded border p-3">
    <button
      @click="$parent.press(1)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 1 </button>
    <button
      @click="$parent.press(2)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 2 </button>
    <button
      @click="$parent.press(3)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 3 </button>
    <button
      @click="$parent.press(4)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 4 </button>
    <button
      @click="$parent.press(5)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 5 </button>
    <button
      @click="$parent.press(6)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 6 </button>
    <button
      @click="$parent.press(7)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 7 </button>
    <button
      @click="$parent.press(8)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 8 </button>
    <button
      @click="$parent.press(9)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 9 </button>
    <button
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.buttonTheme"
      @click="$parent.clear('all')"
    > C </button>
    <button
      @click="$parent.press(0)"
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.keyTheme"
    > 0 </button>
    <button
      class="btn btn-lg shadow-none btn-calculator"
      :class="$parent.buttonTheme"
      @click="$parent.clear()"
    > &larr; </button>
  </div>
</template>

<script>
export default {
    name: 'NumberPad',
}
</script>

<style>
    
</style>