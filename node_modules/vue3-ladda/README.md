# vue3-ladda

A vue 3 wrapper for https://github.com/hakimel/Ladda based on https://github.com/zcfan/vue-ladda. 

[Demo source code](docs/index.html)

## Installation

### NPM

```bash
npm install vue3-ladda
```

```javascript
import VueLadda from 'vue3-ladda'

// or import the vue single file component, if you set vue-loader, sass-loader and babel properly.
import VueLadda from 'vue3-ladda/src/vue-ladda.vue'

// then register it globally
Vue.createApp({...}).component('vue-ladda', VueLadda)

// or locally
var Child = {
  template: '<vue-ladda>Click Me!</vue-ladda>'
}

const app = Vue.createApp({
  components: {
    'vue-ladda': VueLadda,
  }
})
```

## How to use

- Use default slot to give button label: (Default label is "Submit")

    ```html
    <vue-ladda>Confirm</vue-ladda>
    ```

- Use `buttonClass` prop to specify your own CSS classes: (Default is "ladda-class")
    ie. you can use Bootstrap button classes

    ```html
    <vue-ladda button-class="btn btn-primary">Yes!</vue-ladda>
    ```

- Use `data-style` prop to specify animation:

    ```html
    <vue-ladda data-style="expand-left|contract|zoom-in|slide-left">
      ...
    </vue-ladda>
    ```

    Visit [http://lab.hakim.se/ladda/](http://lab.hakim.se/ladda/) to get a full options of data-style.

- Use `loading` prop to control button status:

    ```html
    <vue-ladda loading="true|false">...</vue-ladda>
    ```

- Use `progress` prop to control the ladda built-in progress bar. (0 to 1)

    ```html
    <vue-ladda :progress="0-1">...</vue-ladda>
    ```
