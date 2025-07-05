
const endpoints = {
    searchMoviesUri: (query: string, page: number) => {
        return `/search/movie?query=${query}&include_adult=true&language=en-US&page=${page}`;
    },
    movieImageUri: (imagePath: string) => { 
        return `https://image.tmdb.org/t/p/w200${imagePath}`;
    },
    movieImageUriHD: (imagePath: string) => {
        return `https://image.tmdb.org/t/p/w500${imagePath}`;
    }
}

export default endpoints;
