<template>
  <v-footer class="pa-0">
    <div class="miao-container">
      <v-row class="pa-8">
        <v-col
          v-for="(contact, index) in contactList"
          :key="index"
          class="d-flex col-12 col-sm-6 col-md-3"
        >
          <v-img
            src="@/assets/img/home/star-bg.png"
            max-width="46"
            max-height="46"
            class="align-center text-center"
          >
            <v-icon color="white">mdi-{{ contact.icon }}</v-icon>
          </v-img>
          <div class="pl-2 d-flex flex-column">
            <span>{{ contact.str1 }}</span>
            <span>{{ contact.str2 }}</span>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="footer-copyright">
      <div class="miao-container white--text py-3 align-center text-center">
        <span>Copyright 2021 MIAO. All rights reserved. </span>
        <a href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank" class="white--text"> 沪ICP备2021025738号</a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Fooder',
  data() {
    return {
      contactList: [
        { icon: 'home', str1: 'XX市XX区', str2: 'X路XXX号X号楼' },
        { icon: 'phone', str1: '+86-88-88888888', str2: '+86-86-86868686' },
        { icon: 'email', str1: 'miao@miao.com', str2: 'da@da.com' },
        { icon: 'send', str1: '产品意见', str2: '问题反馈' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-copyright{
  width: 100%;
  background-color: orange;
}
</style>
