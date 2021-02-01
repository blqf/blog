<template>
  <div class="article">
    <div class="left-menu">
      <ul class="menu-list">
        <li
          v-for="(item, index) in menuList"
          :class="{ active: contentId === item.menuId }"
          :key="index"
          @click="change($event, index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="right-content">
      <article-content
        :curMenu="menuList[contentId]"
        :contentList="contentList"
        :contentId="contentId"
      />
    </div>
  </div>
</template>

<script>
// 组件
import articleContent from "../../components/article/article-content.vue";
// 数据接口
import apis from "../../apis/index.js";
export default {
  components: {
    articleContent,
  },
  data() {
    return {
      menuList: [],
      contentList: [],
      contentId: 0,
    };
  },
  methods: {
    change(e, index) {
      this.contentId = index;
    },
  },
  created() {// 请求数据
    apis.getAllMenuTitles().then((res) => {
      this.menuList = res.data.rows;
    });
    apis.getAllContents().then((res) => {
      this.contentList = res.data.data.rows
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/pages/article.less";
</style>