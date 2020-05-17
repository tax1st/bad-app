<template>
  <div class="container">
    <div class="todoForm card">
      <div class="form__title">Добавить новое задание</div>
      <form @submit.prevent="submitForm">
        <div class="form__field">
          <label for="todoTitle" class="label">Заголовок</label>
          <input required v-model="newTodo.title" id="todoTitle" />
        </div>
        <div class="form__field">
          <label for="todoDescription" class="label">Описание</label>
          <input v-model="newTodo.description" id="todoDescription" />
        </div>
        <button>Добавить</button>
      </form>
    </div>

    <div class="todo-list">
      <todo
        v-for="(todo, i) in todos"
        @toggle="toggleTodo(i)"
        @delete="removeTodo(i)"
        :title="todo.title"
        :description="todo.description"
        :done="todo.done"
      ></todo>
    </div>
  </div>
</template>
<script>
import todo from "@/components/Todo.vue";

export default {
  name: "Main",
  components: {
    todo
  },
  data() {
    return {
      newTodo: {
        title: "",
        description: ""
      },
      todos: [
        {
          title: "Помыть посуду",
          description: "Ложки и вилки тоже считаются! Дедлайн в четверг 4 мая.",
          done: false
        },
        {
          title: "Выбрать фильм на вечер",
          description: "Не хоррор!",
          done: true
        }
      ]
    };
  },
  methods: {
    submitForm() {
      this.addTodo(this.newTodo.title, this.newTodo.description);
      this.newTodo.title = "";
      this.newTodo.description = "";
    },
    addTodo(title, description) {
      this.todos.push({
        title,
        description,
        done: false
      });
    },
    removeTodo(i) {
      this.todos.splice(i, 1);
    },
    toggleTodo(i) {
      this.todos[i].done = !this.todos[i].done;
    }
  }
};
</script>
<style lang="scss" scoped>
$color-main: #1b262c;

.container {
  max-width: 800px;
  margin: auto;
}

.todo-list {
  .Todo {
    margin: 10px 0;
  }
}
.todoForm {
  background-color: $color-main;
  color: white;
}
.label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: bold;
}
.form__field {
  margin-bottom: 16px;
}
.form__title {
  font-size: 22px;
  margin-bottom: 16px;
}
</style>