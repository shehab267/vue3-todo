<template>
  <div class="mx-4">
    <h1>Vue 3 Todo App</h1>
    <el-form
      ref="todoFormRef"
      :model="todoForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Todo">
        <el-input autofocus v-model.trim="todoForm"></el-input>
      </el-form-item>
      <!-- <el-form-item label="Description">
      <el-input v-model="todoForm.description"></el-input>
    </el-form-item>
    <el-form-item label="Status">
      <el-select v-model="todoForm.status" placeholder="Select Status">
        <el-option label="Pending" value="Pending"></el-option>
        <el-option label="Completed" value="Completed"></el-option>
      </el-select>
    </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="addTodo">Add a new Todo</el-button>
      </el-form-item>
    </el-form>
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <h3 @click="toggelDone(todo)">{{ todo.content }}</h3>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const todoForm = ref("");
const todos = ref([]);

const addTodo = () => {
  todos.value.push({
    id: Math.random().toString(36).substr(2, 9),
    done: false,
    content: todoForm.value,
  });
  todoForm.value = "";
};
function toggelDone(todo) {
  todo.done = !todo.done;
}
</script>
