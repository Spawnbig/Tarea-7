import { defineStore } from 'pinia'
//import axios from 'axios' para llamar a la API

export const useToDoStore = defineStore('todo',{
    state: () => {
        return{
            tareas: [
                { id:1, tarea:'Comprar pan',completada:false},
                { id:2, tarea:'Cocinar',completada:false},
                { id:3, tarea:'Comprar pan',completada: true}
            ]
        }
    },
    actions: {
        addTodo(tarea){
            this.tareas.push(tarea)
        }
    },
    getters:{
        noCompletados(state){
            let noCompletados = [];
            state.tareas.forEach(e => {
                if(!e.completada) noCompletados.push(e)
            })
            return noCompletados;
        },
        completados(state){
            let completados = [];
            state.tareas.forEach(e => {
                if(e.completada) completados.push(e)
            })
            return completados;
        }
    }
})