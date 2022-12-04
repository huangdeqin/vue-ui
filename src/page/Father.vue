<template>
  <div class="dv">{{ aDouble }}</div>
</template>

<script>
import currentUser from './Son.vue'

export default {
    name: "Father",
    components: {
        currentUser
    },
    data () {
        return {
            a: 2
        }
    },
    mounted () {
    },
    computed: {
        aDouble: function(e) {

          return e.a * 2
        }
    }

}
</script>

<style scoped>
.dv{
    width: 1rem;
    height: 1rem;
    background-color: #FBA806;
}
</style>