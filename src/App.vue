<template>
  <div id="app">
    <header-component />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
  name: 'App',
  components: {HeaderComponent},
}
</script>
