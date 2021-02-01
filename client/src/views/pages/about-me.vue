<template>
  <div class="about-me">
    <div class="wrapper">
      {{ intro }}
    </div>
  </div>
</template>

<script>
// 数据
import { intro } from "../../../data/aboutme.js";
// 请求接口
import apis from "../../apis/index.js";
export default {
  data() {
    return {
      intro,
    };
  },
  created() {
    apis.getIntro().then((res) => {
      this.intro = res.data.data.rows.intro;
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/pages/about-me.less";
</style>