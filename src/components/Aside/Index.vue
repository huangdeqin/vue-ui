<template>
    <div class="nav-page-component">
        <div class="side-wrapper">
            <div class="side-nav">
                <ul class="side-menu">
                    <li
                        class="side-item"
                        v-for="(item, index) of data"
                        :key="index"
                    >
                        <router-link :to="{path: '#', query: {component: item.compsLabelName}}">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--        <div class="is-vertical">-->
        <!--            <div class="el-scrollbar__thumb"></div>-->
        <!--        </div>-->
    </div>
</template>

<script>
import sideMenu from 'data/sideMenu'

export default {
    name: "AsidePage",
    data () {
        return {
            data: sideMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-page-component {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 240px;
    margin-top: 80px;
    overflow: scroll;
    cursor: pointer;

    .side-wrapper {
        .side-nav {
            padding-top: 50px;
            height: 100%;

            .side-menu{
                .side-item{
                    height: 40px;
                    line-height: 40px;
                    color: #333;
                    font-size: 16px;

                    &:hover{
                        color: #409eff;
                    }
                }
            }
        }
    }




    .is-vertical {
        position: absolute;
        right: 2px;
        bottom: 2px;
        z-index: 2;
        border-radius: 4px;
        //opacity: 0;
        //transition: opacity .12s ease-out;
        width: 6px;
        top: 2px;
        background-color: #FBA806;
        height: 100%;

        .el-scrollbar__thumb {
            position: relative;
            display: block;
            width: 0;
            //height: 0;
            cursor: pointer;
            border-radius: inherit;
            background-color: rgba(144, 147, 153, .3);
            transition: background-color .3s;
            height: 100%;
            transform: translateY(100%);
        }

    }
}

::-webkit-scrollbar {
    width: 0;
    /*background-color: red;*/
}

/*::-webkit-scrollbar-track {*/
/*    width: 40px;*/
/*    border-radius: 40px;*/
/*    background-color: blue;*/
/*}*/

//::-webkit-scrollbar-thumb {
//    background-color: rgba(144, 147, 100, .3);
//    transition: background-color .3s;
//}
</style>