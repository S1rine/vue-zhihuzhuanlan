<template>
  <div class="column-list">
    <column-list-item
      v-for="(column) of columnList"
      :key="column.id"
      :item="column"
    />
  </div>
</template>

<script>
import ColumnListItem from './Item';
export default {
  name: 'ColumnList',
  props: {
    columnList: Array
  },
  components: {
    ColumnListItem
  },
  setup(props) {
    console.log(props);
  }
};
</script>

<style lang="less" scoped>
.column-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1320px;
  margin: 0 auto;
}
</style>