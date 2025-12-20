'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { RiMenuAddLine } from 'react-icons/ri';
import { useGetSingleBookQuery } from '@/redux/selectedBookApiSlice';
import { useGetRecBooksQuery } from '@/redux/recBooksApiSlice';
import { useGetSugBooksQuery } from '@/redux/sugBooksApiSlice';
import TrackInfo  from '@/src/components/TrackInfo';
import Controls from '@/src/components/Controls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import PlayList from './PlayList';

interface Book {
  id: string;
  title: string;
  author: string;
  imageLink?: string;
  audioLink?: string;
  subTitle?: string;
}

export default function AudioPlayer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [bookId, setBookId] = useState<string | null>(null);
    const [currentBook, setCurrentBook] = useState<Book | null>(null);
    
    const params = useParams();

    // Extract book ID from URL
    useEffect(() => {
        if (params?.id) {
            const id = Array.isArray(params.id) ? params.id[0] : params.id;
            setBookId(id);
        }
    }, [params]);

    // Try to fetch from selectedBookApi first
    const { data: selectedBook } = useGetSingleBookQuery(bookId!, {
        skip: !bookId,
    });

    // Fetch from recommended books
    const { data: recBooks } = useGetRecBooksQuery(undefined, {
        skip: !bookId,
    });

    // Fetch from suggested books  
    const { data: sugBooks } = useGetSugBooksQuery(undefined, {
        skip: !bookId,
    });

    // Find the current book from any of the three sources
    useEffect(() => {
        if (!bookId) return;

        let foundBook: Book | null = null;

        // First, try the direct book query
        if (selectedBook) {
            foundBook = selectedBook;
        }
        // Then search in recommended books
        else if (recBooks && Array.isArray(recBooks)) {
            foundBook = recBooks.find(book => book.id === bookId) || null;
        }
        // Finally, search in suggested books
        else if (sugBooks && Array.isArray(sugBooks)) {
            foundBook = sugBooks.find(book => book.id === bookId) || null;
        }

        setCurrentBook(foundBook);
    }, [bookId, selectedBook, recBooks, sugBooks]);

    return (
        <div>
              <div className="min-h-8 bg-[#2e2d2d] flex flex-col gap-9 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo currentBook={currentBook} />
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1">
          <Controls currentBook={currentBook} />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <RiMenuAddLine />
          </button>
        </div>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          openDrawer? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
          <PlayList />
        </div>
      </div>
        </div>
    )
}

