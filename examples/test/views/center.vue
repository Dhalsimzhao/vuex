<template>
  <div class="test">
    {{ title }}
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  computed: mapState({
    // msg (state) {
    //   return state.message
    // }
    title: state => {
      return state.message
    }
  })
}
</script>

<style>
  .test {
    color: red;
  }
</style>
