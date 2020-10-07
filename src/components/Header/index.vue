<template>
  <header class="header">
    <div class="inner">
      <div class="title">{{title}}</div>
      <template v-if="isShowDropDown">
        <drop-down>
          <drop-down-item closeAfterClick>
            <a href="#">新建文章</a>
          </drop-down-item>
          <drop-down-item>
            <a href="#">我的专栏</a>
          </drop-down-item>
          <drop-down-item>
            <a href="#">编辑资料</a>
          </drop-down-item>
          <drop-down-item closeAfterClick>
            <a href="#">退出登陆</a>
          </drop-down-item>
        </drop-down>
      </template>
      <template v-else>
        <div class="sign-btn">
          <button class="btn btn-primary sign-in">登录</button>
          <button class="btn btn-light sign-up">注册</button>
        </div>
      </template>
    </div>
  </header>
</template>

<script>
import DropDown from '_c/DropDown';
import DropDownItem from '_c/DropDown/Item';
export default {
  name: 'MyHeader',
  props: {
    title: String,
    isShowDropDown: Boolean
  },
  components: {
    DropDown,
    DropDownItem
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 64px;
  background-color: #0d6efd;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .title {
      font-size: 25px;
      color: #fff;
    }
    .btn {
      margin-left: 15px;
    }
  }
}
</style>