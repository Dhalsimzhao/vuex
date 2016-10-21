<template>
  <div class="app">
    <div class="top-view">
      <top></top>
    </div>
    <div class="left-view">
      <left></left>
    </div>
    <div class="right-view">
      <right></right>
    </div>
    <div class="center-view">
      <center></center>
    </div>
    <div class="bottom-view">
      <bottom></bottom>
    </div>
  </div>
</template>

<script type="text/javascript">
import top from './top.vue'
import left from './left.vue'
import right from './right.vue'
import center from './center.vue'
import bottom from './bottom.vue'

export default {
  components: { top, left, right, center, bottom }
}
</script>

<style type="text/css" media="screen">
.top-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
}

.left-view {
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 0;
  width: 150px;
  border-right: 1px solid #ddd;
}

.right-view {
  position: absolute;
  top: 40px;
  bottom: 40px;
  right: 0;
  width: 150px;
  border-left: 1px solid #ddd;
}

.center-view {
  position: absolute;
  top: 40px;
  left: 150px;
  right: 150px;
  bottom: 40px;
}

.bottom-view {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  border-top: 1px solid #ddd;
}
</style>