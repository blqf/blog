<template>
  <div class="detailed-content">
    <h4>
      {{
        this.contentList[this.$route.query.index] &&
        this.contentList[this.$route.query.index].contentTitle
      }}
    </h4>
    <p>
      {{
        this.contentList[this.$route.query.index] &&
        this.contentList[this.$route.query.index].allContent
      }}
    </p>
  </div>
</template>

<script>
// 数据接口
import apis from "../../apis/index.js";

export default {
  data() {
    return {
      contentList: [],
    };
  },
  created() {
    apis.getAllContents().then((res) => {
      this.contentList = res.data.data.rows;
    });
  },
};
</script>

<style lang="less" scoped>
div {
  color: #ff0;
}
</style>