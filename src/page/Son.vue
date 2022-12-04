<template>
    <div class="dv">
        <slot v-bind:user="user">
            {{ user.lastName }}
        </slot>
    </div>
</template>

<script>
export default {
    name: "currentUser",
    data () {
        return {
            user: {
                firstName: 'first',
                lastName: 'last'
            }
        }
    }
}
</script>

<style scoped>

</style>