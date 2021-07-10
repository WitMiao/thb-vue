<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
    <ToTop/>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToTop from "@/components/ToTop";

export default {
  name: 'App',
  components: {
    ToTop,
    Header,
    Footer,
  },
};
</script>
