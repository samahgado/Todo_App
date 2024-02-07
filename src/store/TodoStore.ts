import { create } from 'zustand'
import {testLists} from "../data"

 export type Todo={
    id:number | null;
    title:string;
    completed:boolean
}
export type ListType = {
    id:number | null;
    name:string;
    todos:Todo[]

}
export type listId ={
    id:number | null
}


interface ListsState {
    lists:ListType[] | [],
    activListId:listId | null,
    selectedListId:(id:listId)=>void,
    addList : (list : ListType) =>void
  
}

export const useTodoStore = create<ListsState>()((set) => ({
    lists:testLists,
    activListId :null,
    selectedListId : (id) => set(state => ({activListId :id})),
    addList : (list) => set(state => ({lists : [...state.lists,list]}))
 
}))