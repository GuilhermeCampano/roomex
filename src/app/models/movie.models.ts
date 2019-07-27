export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
}

export interface MovieApiResponse {
  Search: Movie[];
  totalResults: number;
  Response: boolean;
}
