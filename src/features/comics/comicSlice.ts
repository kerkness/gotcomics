import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { useDispatch, useSelector } from "react-redux";

export interface Comic {
    name: string;
}

export interface ComicState {
    search: string;
    comics: Comic[];
}

const initialState: ComicState = {
    search: '',
    comics: []
}

export type UseComics = ComicState & {
    setSearch(search: string): void;
}

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    }
});

export function useComics(): UseComics {

    const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state.comics);

    return {
        ...state,
        setSearch: (search: string) => dispatch(comicSlice.actions.setSearch(search)),
    }
}

export default comicSlice.reducer;