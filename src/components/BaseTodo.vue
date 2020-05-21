<template>
  <button 
    :class="classNames"
    @click="$emit('toggle')"
  >
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>

    <button @click="$emit('delete')">
      <img src="../assets/cross.svg">
    </button>
  </button>
</template>

<script>
export default {
  name: 'BaseTodo',
  props: {
    done: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    classNames() {
      return [
        'wrapper',
        'card',
        this.done && 'done'
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";

.wrapper {
  background-color: $color-main;
  color: $color-todo-text;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  &:hover {
    background-color: rgba($color-main, 0.8);
  }

  &.done {
    opacity: 0.5;

    h3 {
      text-decoration: line-through;
    }
  }

  & > button {
    height: 28px;
    min-width: 60px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: $color-todo-delete;
    margin-top: 12px;

    > img {
      margin-top: 3px;
    }

    &:hover {
      background-color: rgba($color-todo-delete, 0.8);
    }
  }
}
</style>