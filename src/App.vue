<template>
  <v-app>
    <Progress />
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <ToTop />
  </v-app>
</template>

<script>
import Progress from '@/components/Progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export default {
  name: 'App',
  components: {
    Progress,
    ToTop,
    Header,
    Footer,
  },
};
</script>
