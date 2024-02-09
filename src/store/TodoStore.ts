import { create } from 'zustand'
import {testLists} from "../data"
import { devtools , persist } from 'zustand/middleware';

 export type TodoType={
    id:number ;
    title:string;
    completed:boolean
}
export type ListType = {
    id:number | null;
    name:string;
    todos:TodoType[] | []

}
// export type listId ={
//     id:number | null
// }


interface ListsState {
    lists:ListType[] | [],
    activListId:number | null,
    selectedListId:(id:number | null)=>void,
    addList : (list : ListType) =>void,
    deleteList : ()=>void
    addTodo : (todoId :TodoType)=>void,
    editTodoStatus : (todoId:number)=>void,
//   const remainingTodos = todos?.filter((todo) => todo.completed === false);
remainingTodos:()=>void
}

export const useTodoStore = create<ListsState>()(devtools(persist((set) => ({
    lists:testLists,
    activListId :null,
    selectedListId : (id) => set(state => ({activListId :id})),
    addList : (list) => set(state => ({lists : [...state.lists,list]})),
    addTodo : ( todo)=>set(state=>({lists:state.lists.map((list)=>(list.id === state.activListId ? {...list,todos:[...list.todos,todo]}:list))})),
    deleteList:() =>set(state=>({lists:state.lists.filter((list)=>(list.id !== state.activListId))})),
    editTodoStatus:(todoId)=>set(state => ({lists:state.lists.map((list)=>(list.id === state.activListId ? {...list,todos:list.todos.map((todo)=>(todo.id === todoId ? {...todo,completed:!todo.completed}: todo))}:list))})),
    remainingTodos:()=>set((state)=>({lists:state.lists.map((list)=>(list.id === state.activListId ? {...list,todos:list.todos.filter((todo) => todo.completed === false)}:list))}))

}),{name:"todos"})))