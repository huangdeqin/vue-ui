<template>
    <div>
        <header-page></header-page>
        <div class="main">
            <div class="page-container page-component">
                <aside-page></aside-page>
                <main-content></main-content>
            </div>
        </div>
    </div>
</template>

<script>
import MainLogin from '../components/MainLogin/index.vue'
import HeaderPage from 'components/Header/Index'
import AsidePage from 'components/Aside/Index'
import MainContent from 'components/MainContent/Index'

export default {
    name: "Index",
    components: {
        MainLogin,
        HeaderPage,
        AsidePage,
        MainContent
    }
}
</script>

<style scoped lang="scss">
.main {
    height: calc(100% - 80px);
    margin-top: 80px;

    .page-container {
        width: 1140px;
        margin: 0 auto;
    }
}
</style>