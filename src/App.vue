<template>
<b-card title="ToDoer" class="fs-1">
</b-card>
<div class=".container-md mx-auto w-50 container-no-completadas">
    <div class="d-flex mt-4">
      <b-form-input class="w-75" v-model="tarea" placeholder="¿Qué quieres hacer hoy?..."></b-form-input>
      <b-button v-on:click="addTodo()" class="mx-1 rounded-circle" variant="outline-success">+</b-button>
    </div>
    <b-card v-for="t in noCompletados" v-bind:key="t.id" class="w-75 mt-2" @mouseover="showInfo(t.id)">
      <b-card-body class="flex">
        <b-card-text>
          {{t.tarea}}
        </b-card-text>
        <div class="text-right buttons">
          <b-button variant="success" @click="changeACompletada(t.id)">✓</b-button>
          <b-button variant="danger" @click="showDialog = true; idEliminar = t.id">X</b-button>
        </div>
      </b-card-body>
    </b-card>
</div>
<div class=".container-md mt-4 mx-auto w-50 container-completadas">
  <h5>v Completadas</h5>
  <b-card v-for="t in completados" v-bind:key="t.id" class="w-75 mt-2">
    <b-card-body class="flex">
      <b-card-text class="flex">
        {{t.tarea}}
      </b-card-text>
      <div class="text-right buttons">
        <b-button variant="success" @click="changeACompletada(t.id)">↑</b-button>
        <b-button variant="danger" @click="showDialog = true; idEliminar = t.id">X</b-button>
      </div>
      </b-card-body>
  </b-card>
</div>
  <DialogDelete
  :show="showDialog"
  :cancel="cancel"
  :confirm="eliminar"
  title="Eliminar Tarea?"
  description="Realmente deseas eliminar la tarea?"


  ></DialogDelete>

</template>

<script>
import { useToDoStore } from './stores/ToDo'
import DialogDelete from './components/DialogDelete.vue'


export default {
  components:{
    DialogDelete
  },
  data(){
    return{
      tarea: null,
      todos : useToDoStore(),
      noCompletados: [],
      completados:[],
      showDialog: false,
      idEliminar: null
    }
  },
  mounted(){
    this.noCompletados = this.todos.noCompletados
    this.completados = this.todos.completados
  },
  methods: {
    addTodo(){
      if(this.tarea != null || this.tarea != ''){
        this.todos.addTodo(this.tarea);
        this.tarea = null;
        this.noCompletados = this.todos.noCompletados;
        this.completados = this.todos.completados;
      }

    },
    showInfo(a){
      console.log(a)
    },
    changeACompletada(value){
      this.todos.changeCompletada(value)
      this.noCompletados = this.todos.noCompletados;
      this.completados = this.todos.completados;
    },
    eliminar(){
      this.todos.eliminar(this.idEliminar)
      this.noCompletados = this.todos.noCompletados;
      this.completados = this.todos.completados;
      this.idEliminar = null
      this.showDialog = false
    },
    cancel(){
      this.showDialog = false
    }
  }
}
</script>

<style>
.container-no-completadas{
  max-height: 500px;
  overflow-y: auto;
}


.flex{
  display:flex;
  justify-content: space-between;
}


</style>
