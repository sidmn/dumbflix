import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    popularity: number;
    release_date: string;
  }

export interface SearchState{
    results: Movie[];
  }

const initialState: SearchState = {
    results: []
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      setSearchResults: (state, action: PayloadAction<Movie[]>) => {
        state.results = action.payload;
      },
    },
  });

  export const {setSearchResults} = searchSlice.actions;
  export default searchSlice.reducer;