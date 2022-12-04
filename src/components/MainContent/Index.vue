<template>
    <div class="main-content">
        <div class="content">
            <component :is="comp" />
        </div>
    </div>
</template>

<script>
import MyInputPage from '../MyInput/Index'
import MainLogin from '../MainLogin/index'
import SideBar from '../compsWrapper/SideBar'
import UseTab from '../compsWrapper/UseTab'
import UseTodoList from '../compsWrapper/UseTodoList'


export default {
    name: "MainContent",
    components: {
        MyInputPage,
        MainLogin,
        SideBar,
        UseTab,
        UseTodoList
    },
    data(){
      return {
          component: 'stars-ui'
      }
    },
    computed: {
        comp () {
            return this.$route.query.component
        },
    },
    mounted () {
        // console.log()
    },
    watch: {

    }
}
</script>

<style lang="scss" scoped>
.main-content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
    overflow: scroll;

    .content {
        padding-top: 50px;
        height: 100%;
    }
}

</style>