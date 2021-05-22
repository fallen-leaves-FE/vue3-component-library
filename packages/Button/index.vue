<template>
  <button
    class="fa-button"
    :class="classNames"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

type ButtonTypes = 'default' | 'text'| 'primary' | 'success' | 'warning' | 'info' | 'danger' | undefined
type ButtonSize = 'medium' | 'small' | 'mini' | undefined
interface ButtonProps {
  type?: ButtonTypes
  disabled?: boolean
  round?: boolean
  plain?: boolean
  circle?: boolean
  size?: ButtonSize 
}

export default defineComponent({
  name: 'FaButton',
  props: {
    type: { // 按钮类型
      type: String as PropType<ButtonTypes>,
      default: 'default'
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    round: { // 是否为圆角按钮
      type: Boolean,
      default: false
    },
    plain: { // 是否为朴素按钮
      type: Boolean,
      default: false
    },
    circle: { // 是否圆形按钮
      type: Boolean,
      default: false
    }
  },
  setup(props: ButtonProps, context) {
    const classNames = reactive({
      'fa-button--text': props.type === 'text',
      'fa-button--primary': props.type === 'primary',
      'fa-button--success': props.type === 'success',
      'fa-button--warning': props.type === 'warning',
      'fa-button--info': props.type === 'info',
      'fa-button--danger': props.type === 'danger',
      'is-disabled': props.disabled,
      'is-plain': props.plain,
      'is-circle': props.circle,
      [`size--${props.size}`]: !!props.size
    })
    const handleClick = (e: any) => {
      if (props.disabled) {
        return false
      }
      context.emit('click', e)
    }
    return {
      classNames,
      handleClick
    }
  }
})
</script>
<style lang="scss">
@import '../style/scss/button';
</style>
