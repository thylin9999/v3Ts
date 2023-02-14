<template>
    <div id="app" class="w-full">
        <!--        <Home></Home>-->
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
    import Home from './views/home.vue'
</script>


<style scoped>
    #app {
        /*background-color: rgba(9, 8, 33,.4);*/
    }
</style>
