<template>
  <div :class="['card', 'Todo', done ? 'Todo--done' : null]" @click="$emit('toggle')">
    <div class="Todo__title">{{title}}</div>
    <div class="Todo__description">{{description}}</div>

    <button class="Todo__delete" @click.stop="$emit('delete')">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L13 13M1 13L13 1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["done", "title", "description"]
};
</script>
<style lang="scss" scoped>
$color-todo-bg: #1b262c;
$color-todo-text: white;
$color-todo-delete: rgb(221, 139, 139);

.Todo {
  background-color: $color-todo-bg;
  color: $color-todo-text;
  cursor: pointer;

  .Todo__delete {
    height: 28px;
    min-width: 60px;
    border-radius: 4px;
    background-color: $color-todo-delete;
    border: none;
    &:hover {
      background-color: rgba($color-todo-delete, 0.8);
    }
  }

  .Todo__title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0.4em;
  }
  .Todo__description {
    font-size: 14px;
  }

  .Todo__delete {
    margin-top: 12px;
    cursor: pointer;
  }

  &.Todo--done {
    opacity: 0.5;
    .Todo__title {
      text-decoration: line-through;
    }
  }
  &:hover {
    background-color: rgba($color-todo-bg, 0.8);
  }
}
</style>
