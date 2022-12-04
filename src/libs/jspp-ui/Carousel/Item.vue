<template>
  <transition>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { getCurrentInstance,
  reactive,
  toRefs,
  watch
} from 'vue'

export default {
  name: "CarItem",
  setup () {
    const instance = getCurrentInstance();

    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    });

    watch(() => {
      return  instance.parent.ctx.currentIndex;
    }, (value) => {
      state.currentIndex = value;
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.car-item{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s linear;
}

.v-enter-active{
  transition: translateX(100%);
}

.v-leave-active{
  transition: translateX(0);
}

.v-enter-to{
  transition: translateX(0);
}

.v-leave-to {
  transition: translateX(-100%);
}

img{
  width: 100%;
}
</style>