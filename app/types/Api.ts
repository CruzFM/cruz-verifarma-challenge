export interface SearchResponse{
    Search: ItemResponse[];
    totalResults: string;
    Response: string;
}

export interface SearchByIdResponse{
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: "movie" | "series" | "episode";
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface ItemResponse {
    Title: string;
    Year: string;
    imdbID: string;
    Type: "movie" | "series" | "episode";
    Poster: string;
}