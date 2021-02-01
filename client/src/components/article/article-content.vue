<template>
  <div class="article-content">
    <dl>
      <dt>{{ curMenu ? curMenu.title : '' }}</dt>
      <template v-for="(item, index) in contentList">
        <dd v-if="item.contentId === contentId" :key="index">
          <router-link
            tag="h2"
            :to="{
              name: 'detailedContent',
              query: { index },
            }"
            >{{ item.contentTitle }}</router-link
          >
          <p>{{ item.briefIntro }}</p>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script>
export default {
  name: "article-content",
  props: ["contentList", "curMenu", "contentId"]
};
</script>

<style lang="less" scoped>
@import "../../assets/css/article/article-content.less";
</style>