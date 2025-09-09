export interface Recommendation {
    title: string;
    searchQuery: string;
    type?: 'movie' | 'series';
    year?: string;
}