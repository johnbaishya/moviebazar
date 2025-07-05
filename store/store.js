import { create } from 'zustand'

const initialState = {
    searchKeyword: '',
    movies :[],
    selectedMovie: null,
    pageMetaData: {
        page:1,
        total_pages: 1,
        total_results: 0,
    },
    loading:false,
    fresh: true,
}

const useAppStore = create((set) => ({
    ...initialState,
    updateState:(data)=>set(state=>({
        ...state,
        ...data
    })),
    reset:()=>set(initialState)
}))

export default useAppStore;