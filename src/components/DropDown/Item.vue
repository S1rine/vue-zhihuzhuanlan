<template>
  <li
    class="dropdown-item"
    :class="{'is-diasbled': disabled}"
  >
    <slot />
  </li>
</template>

<script>
export default {
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.dropdown-item {
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  &.is-diasbled {
    color: #6c757d;
    pointer-events: none;
    background-color: #eee;
  }
}
</style>