<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input 
      :type="typeInput"
      :value="modelValue"
      :placeholder="placeholder"
      class="border light:border-black/10 dark:border-white/5"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  
  props: {
    label: {
      type: [String, Boolean],
      default: false,
    },
    typeInput: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    }
  },

  emits: ['update:modelValue']
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 12px;
    opacity: 50%;
    font-weight: 300;
  }

  input {
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px 15px;
  }

  input::placeholder {
    opacity: 35%;
  }
}
</style>
