import { defineStore } from 'pinia'
//import axios from 'axios' para llamar a la API

export const useToDoStore = defineStore('todo',{
    state: () => {
        return{
            todos: []
        }
    },
    actions: {
        addTodo(todo){
            this.todos.push(todo)
        }
    }
})