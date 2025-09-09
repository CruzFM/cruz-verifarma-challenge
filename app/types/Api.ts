export interface SearchResponse{
    Search: ItemResponse[];
    totalResults: string;
    Response: string;
}

export interface ItemResponse {
    Title: string;
    Year: string;
    imdbID: string;
    Type: "movie" | "series" | "episode";
    Poster: string;
}