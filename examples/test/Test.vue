<template>
  <div id="app">
    <div class="test">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  // computed: mapGetters([
  //   'evenOrOdd'
  // ]),
  // methods: mapActions([
  //   'increment',
  //   'decrement',
  //   'incrementIfOdd',
  //   'incrementAsync'
  // ])
  // computed: {
  //   msg() {
  //     return store.state.message
  //   }
  // }
  computed: mapState({
    // msg (state) {
    //   return state.message
    // }
    msg: state => {
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
