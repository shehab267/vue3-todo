<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    // mode prop used to bind class, so I can pass any class I want
    mode: {
      type: String,
      requiered: false,
      default: null,
    },
    // pass 'link' to render Targeted elment "RouterLink" at the template
    link: {
      type: Boolean,
      requiered: false,
      default: false,
    },
    // :bind to prop useful to render RouterLink to my own 'to'
    // * !Important for 'router-link' in other components
    to: {
      type: String,
      requiered: false,
      default: '/',
    },
  },
};
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
