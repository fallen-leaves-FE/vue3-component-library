<template>
  <button
    class="fa-button"
    :class="classNames"
    @click="handleClick"
  >
    <span
      v-if="slots.icon"
      class="fa-button__icon"
    >
      <slot name="icon" />
    </span>
    <span
      v-if="slots.default"
      class="fa-button__inner"
    >
      <slot />
    </span>
  </button>
</template>
<script lang="ts" setup>
import { withDefaults, useSlots, reactive } from 'vue'

type ButtonTypes = 'default' | 'text'| 'primary' | 'success' | 'warning' | 'info' | 'danger' | undefined
type ButtonSize = 'medium' | 'small' | 'mini' | undefined

const props = withDefaults(defineProps<{
  type?: ButtonTypes
  disabled?: boolean
  round?: boolean
  plain?: boolean
  circle?: boolean
  size?: ButtonSize
}>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  round: false,
  plain: false,
  circle: false
})

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
  'is-round': props.round,
  [`size--${props.size}`]: !!props.size
})

const emit = defineEmits(['click'])

const slots = useSlots()

const handleClick = (e: any) => {
  if (props.disabled) {
    return false
  }
  emit('click', e)
}

</script>
