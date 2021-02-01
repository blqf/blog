<template>
  <!-- 默认布局,上中 -->
  <div class="default">
    <el-container>
      <el-header height="">
        <img src="../../assets/images/logo.jpg" alt="logo" />
        <!-- <span>ひょうむゆうです、よろしくお願いします。</span> -->
        <ul class="nav-list">
          <li v-for="(item, index) in navList" :key="index">
            <router-link class="nav-title" :to="{ name: item.name }">{{ item.title }}</router-link>
          </li>
        </ul>
      </el-header>

      <el-main class="main">
        <keep-alive>
          <router-view v-if="needKeepActive.includes($route.name)" />
        </keep-alive>
        <router-view v-if="!needKeepActive.includes($route.name)" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "首页",
          name: "home",
        },
        {
          title: "文章",
          name: "article",
        },
        // {
        //   title: "随心说",
        //   name: "freeWords",
        // },
        {
          title: "云相册",
          name: "picture",
        },
        // {
        //   title: "留言",
        //   name: "message",
        // },
        {
          title: "关于我",
          name: "aboutMe",
        },
        // {
        //   title: "登录/注册",
        //   name: "loginRegister",
        // },
      ],
      needKeepActive: ['article']
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/default.less";
</style>
