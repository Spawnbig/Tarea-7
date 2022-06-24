<template>
<b-card title="ToDoer" class="fs-1">
</b-card>
<div class=".container-md mx-auto w-50">
    <div class="d-flex mt-4">
      <b-form-input class="w-75" v-model="tarea" placeholder="¿Qué quieres hacer hoy?..."></b-form-input>
      <b-button v-on:click="addTodo()" class="mx-1 rounded-circle" variant="outline-success">+</b-button>
    </div>
    <b-card class="w-75 mt-2">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card>


</div>
<div class=".container-md mx-auto w-50">
</div>


</template>

<script>
import { useToDoStore } from './stores/ToDo'

export default {
  data(){
    return{
      tarea: null,
      todos : useToDoStore()
    }
  },
  methods: {
    addTodo(){
      this.todos.addTodo(this.tarea)
      console.log(this.todos[0])
    }
  }
}
</script>

<style>
</style>
