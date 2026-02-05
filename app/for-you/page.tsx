"use client";

import SelectedBooks from "@/components/selectedBook/SelectedBook";
import RecommendedBooks from "@/components/recBooks/RecommendBooks";
import SuggestedBooks from "@/components/suggestedBook/SuggestedBooks";


export default function forYou() {
  return (
    <div className="container">
      <div className="row">
        <div className='forYouWrapper'>
          <div className="foryou__header">Selected just for you</div>
          <SelectedBooks />
          <RecommendedBooks />
          <SuggestedBooks />
        </div>
      </div>
    </div>
  );
}
