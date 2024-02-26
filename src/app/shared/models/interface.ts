export interface RespostaAPI<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface filmes {
  title: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
