<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <div class="flex bg-black text-white text-[10rem]">apel</div> -->
  <!-- <Navbar class="fixed w-screen z-[100]" /> -->
  <router-view />
  <!-- <Footer /> -->
</template>

<script>
// import Navbar from "./components/header.vue";
// import Footer from "./components/footer.vue";
export default {
  name: "app",
  components: {},
  created() {
    // console.log(this.$route);
    // console.log(this.$route.path);
    // showData() {
    // console.log(this.$router.currentRoute._value.fullPath);
    // let cek = this.$router.currentRoute._value.fullPath;
    // return cek !== "/";
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
