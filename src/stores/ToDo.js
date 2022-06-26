import { defineStore } from 'pinia'
//import axios from 'axios' para llamar a la API

export const useToDoStore = defineStore('todo',{
    state: () => {
        return{
            tareas: [
                { id:1, tarea:'Comprar pan',completada:false, eliminada:false},
                { id:2, tarea:'Cocinar',completada:false, eliminada: false},
                { id:3, tarea:'Comprar pan',completada: true, eliminada: false}
            ]
        }
    },
    actions: {
        addTodo(tarea){
            let idObject = (this.tareas.length + 1)
            this.tareas.push({
                id: idObject, tarea: tarea, completada: false
            })
        },
        changeCompletada(id){
            if(this.tareas[(id-1)].completada){
                this.tareas[(id-1)].completada = false
            }else {
                this.tareas[(id-1)].completada = true
            }
        },
        eliminar(id){
            this.tareas[(id-1)].eliminada = true
        }
    },
    getters:{
        noCompletados(state){
            let noCompletados = [];
            state.tareas.forEach(e => {
                if(!e.completada && !e.eliminada) noCompletados.push(e)
            })
            return noCompletados;
        },
        completados(state){
            let completados = [];
            state.tareas.forEach(e => {
                if(e.completada && !e.eliminada) completados.push(e)
            })
            return completados;
        }
    }
})