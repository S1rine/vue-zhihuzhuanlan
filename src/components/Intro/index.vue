<template>
  <div class="intro-container">
    <div class="img-box">
      <img
        src="~@/assets/img/callout.svg"
        alt=""
      >
    </div>
    <div class="intro">随心写作，自由表达</div>
    <div class="btn-wrapper">
      <button class="btn btn-primary">开始写文章</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
};
</script>

<style lang="less" scoped>
.intro-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    text-align: center;
    margin-bottom: 20px;
  }
  .img-box {
    width: 50%;
    max-width: 300px;
  }
  .intro {
    font-size: 30px;
  }
  .btn-wrapper {
    .btn {
      height: 40px;
      padding: 0 20px;
      font-size: 20px;
    }
  }
}
</style>