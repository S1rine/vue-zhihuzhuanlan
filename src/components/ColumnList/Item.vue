<template>
  <div class="column-list-item">
    <div class="column-list-inner">
      <div class="avatar">
        <img :src="item.avatar.url">
      </div>
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.description}}</div>
      <div class="btn-wrapper">
        <button class="btn btn-ghost">进入专栏</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnListItem',
  props: {
    item: Object
  }
};
</script>

<style lang="less" scoped>
.column-list-item {
  flex: 0 0 auto;
  flex-shrink: 0;
  width: 33.33%;
  max-width: 100%;
  padding: 0 5px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  .column-list-inner {
    position: relative;
    padding: 20px 10px;
    padding-bottom: 50px;
    margin: 0 5px;
    border: 1px solid #eee;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    transition: transform 0.5s;
    box-sizing: border-box;
    &:hover {
      transform: scale(1.1);
      z-index: 1;
    }
    > div {
      margin-bottom: 15px;
    }
    .avatar {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      font-size: 16px;
      color: #999;
      line-height: 20px;
      height: 60px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .btn-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
}
</style>