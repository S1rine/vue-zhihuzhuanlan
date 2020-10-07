import { ref, onMounted, onUnmounted } from 'vue';

/**
 * useClickOutside 检测点击事件是否点击到目标dom对象之外。
 * @param {HTMLElement} elemRef 目标dom对象，此处特定为 vue.ref 的返回指
 */
const useClickOutside = elemRef => {
  const isClickOutside = ref(false);
  // 状态值，表示是否点击到外侧，默认为false

  /**
   * handler 点击事件的回调函数
   * @param {MouseEvent} e 鼠标点击事件对象
   */
  const handler = e => {
    // 传入的 dom 引用需要有值
    if (elemRef.value) {
      // 当前点击的 dom 元素是否包含在目标元素内，是的话则判定没有点击到外侧
      if (elemRef.value.contains(e.target)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  // 绑定点击事件
  onMounted(() => {
    document.addEventListener('click', handler);
  });
  // 移除点击事件
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return isClickOutside;
};

export default useClickOutside;
