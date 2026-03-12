"use client";

import SelectedBooks from "@/components/selectedBook/SelectedBook";
import RecommendedBooks from "@/components/recBooks/RecommendBooks";
import SuggestedBooks from "@/components/suggestedBook/SuggestedBooks";


export default function forYou() {
  return (
    <div className="container">
      <div className="row">
        <div className='forYouWrapper'>
          <SelectedBooks />
          <RecommendedBooks />
          <SuggestedBooks />
        </div>
      </div>
    </div>
  );
}
