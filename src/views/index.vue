<template>
  <div class="index-page">
    <Intro />
    <h2 class="discovery">发现精彩</h2>
    <column-list :columnList="columnList" />
    <div
      class="btn-wrapper"
      v-if="hasMore"
    >
      <button
        class="btn btn-ghost"
        @click="loadMore"
      >加载更多</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { getColumnList } from '@/api/column';
import Intro from '_c/Intro';
import ColumnList from '_c/ColumnList';

export default {
  name: 'IndexPage',
  components: {
    Intro,
    ColumnList
  },
  setup() {
    const pageSize = 6;
    let currentPage = 1,
      count = 0;
    const columnList = ref([]),
      hasMore = ref(true);

    onMounted(() => {
      _loadColumnList();
    });

    watch(
      () => columnList.value,
      newVal => {
        if (newVal.length >= count) {
          console.log(newVal.length);
          hasMore.value = false;
        }
      }
    );

    async function _loadColumnList() {
      let params = {
        currentPage,
        pageSize
      };
      const data = await getColumnList(params);
      if (data.code === 0) {
        count = data.data.count;
        columnList.value = [...columnList.value, ...data.data.list];
      }
    }

    const loadMore = () => {
      currentPage++;
      _loadColumnList();
    };

    return {
      columnList,
      loadMore,
      hasMore
    };
  }
};
</script>

<style lang="less" scoped>
.discovery {
  text-align: center;
}
.btn-wrapper {
  text-align: center;
  margin: 10px 0;
  margin-bottom: 50px;
  .btn {
    height: 50px;
    width: 120px;
  }
}
</style>