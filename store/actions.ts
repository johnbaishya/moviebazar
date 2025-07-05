import useAppStore from "./store";

export const updateStore = (data:any)=>{
    useAppStore.getState().updateState(data);
}


export const resetStore = ()=>{
    useAppStore.getState().reset();
}