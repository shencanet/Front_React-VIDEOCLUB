

import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'films',
    initialState: {
      //cuando busqueis varias, poned un array vacio aqui
      films: ""
    },
    reducers: {
      searchFilms: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    },
});

export const searchFilm = (argumento) => async (dispatch) => {
    try {      
        dispatch(searchFilms({films: argumento}));
    } catch (error) {
      console.log(error)
    }
};

//Exporto las funciones que en si realizan la accion
export const { searchFilms } = searchSlice.actions;

export const searchData = (state) =>  state.search.films;

export default searchSlice.reducer;