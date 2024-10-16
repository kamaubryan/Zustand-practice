import { create } from "zustand";

export const useAppStore = create((set)=> ({
    userDetails:{
    email:'', 
    password:''
    },
    cartValue:[]
    ,
    updateEmail:(val) =>  set({email:val}),
    updatePassword: (val) => set({password:val})
}))
