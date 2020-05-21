<template>
  <div class="wrapper">
    <div class="form card">
      <h2>Добавить новое задание</h2>

      <form @submit.prevent="addTodo">
        <div class="form__field">
          <label>
            <h5>Заголовок</h5>
            <input required v-model="newTodo.title" />
          </label>
        </div>

        <div class="form__field">
          <label>
            <h5>Описание</h5>
            <input v-model="newTodo.description" />
          </label>
        </div>
        <button>Добавить</button>
      </form>
    </div>

    <ul>
      <li v-for="(todo, i) in todos" :key="todo.uid">
        <todo
          @toggle="toggleTodo(i)"
          @delete="removeTodo(i)"
          :title="todo.title"
          :description="todo.description"
          :done="todo.done"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseTodo from "@/components/BaseTodo";

export default {
  name: "Main",
  components: {
    'todo': BaseTodo
  },
  data() {
    const todos = [
      {
        uid: 0,
        title: "Помыть посуду",
        description: "Ложки и вилки тоже считаются! Дедлайн в четверг 4 мая.",
        done: false
      },
      {
        uid: 1,
        title: "Выбрать фильм на вечер",
        description: "Не хоррор!",
        done: true
      }
    ]

    return {
      uid: todos.length,
      newTodo: {
        title: "",
        description: "",
        done: false
      },
      todos
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        ...this.newTodo,
        uid: ++this.uid
      });

      this.resetNewTodo();
    },
    removeTodo(i) {
      this.todos.splice(i, 1);
    },
    toggleTodo(i) {
      this.todos[i].done = !this.todos[i].done;
    },
    resetNewTodo() {
      this.newTodo.title = "";
      this.newTodo.description = "";
      this.newTodo.done = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";

.wrapper {
  max-width: 800px;
  margin: auto;
}
</style>