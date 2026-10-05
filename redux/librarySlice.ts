import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from './store';

export interface SavedBook {
    id: string;
    title: string;
    author: string;
    imageLink?: string;
    subTitle?: string;
}

const LIBRARY_STORAGE_KEY = 'summaristSavedBooks';

const loadFromLocalStorage = (): SavedBook[] => {
    try{
        const savedData = localStorage.getItem(LIBRARY_STORAGE_KEY);
        if (savedData) {
            return JSON.parse(savedData);
        }
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
    return [];
};

const saveToLocalStorage = (books: SavedBook[]) => {
    try{
        localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(books));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

interface LibraryState {
    savedBooks: SavedBook[];
}
const initialState: LibraryState = {
    savedBooks: loadFromLocalStorage()
}


const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<SavedBook>) => {
        const bookToAdd = action.payload;
        
        if (!state.savedBooks.some(book => book.id === bookToAdd.id)) {
                state.savedBooks.push(bookToAdd);
                saveToLocalStorage(state.savedBooks);
            }
        },

        removeBook: (state, action: PayloadAction<string>) => {
            state.savedBooks = state.savedBooks.filter(book => book.id !== action.payload);
            saveToLocalStorage(state.savedBooks);
        }

    }
})

export const selectSavedBooks = (state: RootState) => state.library.savedBooks;

export const addBook = librarySlice.actions.addBook;
export const removeBook = librarySlice.actions.removeBook;

export default librarySlice; 