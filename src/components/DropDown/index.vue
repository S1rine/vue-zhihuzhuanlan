<template>
  <div
    class="dropdown"
    ref="dropDownRef"
  >
    <a
      class="btn btn-dropdown-toggle"
      href="#"
      @click.prevent="toggleMenu"
    >
      欢迎你，{{userName}}
      <i
        class="fa fa-chevron-right"
        :class="{'fa-bottom': isMenuShow}"
        aria-hidden="true"
      ></i>
    </a>
    <transition name="slide-fade">
      <ul
        class="dropdown-menu"
        v-if="isMenuShow"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import useClickOutside from '_h/useClickOutside';
export default {
  name: 'DropDown',
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  setup() {
    const isMenuShow = ref(false);
    const dropDownRef = ref(null);

    const isClickOutside = useClickOutside(dropDownRef);

    watch(isClickOutside, () => {
      if (isMenuShow.value && isClickOutside.value) {
        isMenuShow.value = false;
      }
    });

    const toggleMenu = () => {
      isMenuShow.value = !isMenuShow.value;
    };

    return {
      isMenuShow,
      toggleMenu,
      dropDownRef
    };
  }
};
</script>

<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.dropdown {
  position: relative;
  .dropdown-menu {
    position: absolute;
    top: 120%;
    left: 0;
    display: block;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .fa {
    transition: transform 0.5s;
  }
  .fa-bottom {
    transform: rotate(90deg);
  }
}
</style>