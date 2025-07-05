// This file contains the movie service functions that interact with the movie API.

import { get } from "node_modules/axios/index.cjs";
import endpoints from "./api/endpoints"
import { getApiRequest } from "./api/httpRequestService";
import useAppStore from "store/store";
import { updateStore } from "store/actions";

// This function is used to search for movies based on a query and page number.
// It constructs the request URL using the searchMoviesUri endpoint and calls the API.

export const searchMovies = (query:string, page:number,append:boolean)=>{
    updateStore({loading:true});
    const uri = endpoints.searchMoviesUri(query, page);
    console.log("Search URI: ", uri);
    // Call the API to search for movies
    getApiRequest(uri).then(res=>{
        const data = res.data;
        let movies = res.data.results;
        let appStore = useAppStore.getState();
        let pageMetaData = {
            ...appStore.pageMetaData,
            page:data.page,
            total_pages: data.total_pages,
            total_results: data.total_results,
        }

        console.log("Page Metadata: from here ", pageMetaData);

        // Update the store with the search results
        if(append){
            // If append is true, concatenate the new movies with the existing ones
            movies = [...appStore.movies, ...movies];
        }
        updateStore({movies,pageMetaData,searchKeyword:query,loading:false});
        console.log("Search Results: ", res.data);
    }).catch(err=>{
        console.error("Error fetching search results: ", err);
        updateStore({loading:false});
    })
}


// This function is used to get more movies when the user scrolls down.
// It checks if the current page is less than the total pages and then calls searchMovies with the next page number.
// It also prevents multiple requests if already loading.       
export const getMoreMoviesAfterScroll = ()=>{
    console.log("Fetching more movies after scroll...");
    const {loading} = useAppStore.getState();
    if(loading){
        console.log("Already loading more movies, skipping this request.");
        return; // Prevent multiple requests if already loading
    }

    updateStore({loading:true});
    let appStore = useAppStore.getState();
    let {page,total_pages,total_results} = appStore.pageMetaData;
    console.log("lets test here")
    console.log("meta",appStore.pageMetaData);

    if(page >= total_pages){
        console.log("No more pages to load. Total pages: ", total_pages);
        updateStore({loading:false});
        return; // No more pages to load
    }

    const newPage = page+1; // Increment the page number for the next request
    searchMovies(appStore.searchKeyword, newPage,true); // Call searchMovies with the new page number
}   


export const selectMovie = (details:any)=>{
    updateStore({selectedMovie:details});
}   
