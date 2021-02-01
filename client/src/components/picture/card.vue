<template>
  <div class="card-cmp">
    <ul>
      <li v-for="(item, index) in pics" :key="index">
        <img :src="item.imgUrl" />
        <p>{{ item.intro }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// 数据接口
import apis from "../../apis/index.js";
export default {
  data() {
    return {
      pics: [],
    };
  },
  created() {
    apis.getAllPicture().then((res) => {
      this.pics = res.data.data.rows;
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/pages/picture.less";
</style>