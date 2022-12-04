<template>
        <ul class="nav">
            <li class="nav-item">item1</li>
            <li class="nav-item">item2</li>
            <li class="nav-item">item3</li>
            <li class="nav-item">item4</li>
        </ul>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>

<style lang="scss" scoped>
.nav{
    float: right;
    height: 80px;
    padding-left: 146px;
    line-height: 80px;

    .nav-item{
        float: left;
        margin-right: 100px;
    }
}
</style>