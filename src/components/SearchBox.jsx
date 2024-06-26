"use client";

import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
   const searchParams = useSearchParams();
   const router = useRouter();
   const searchTerm = searchParams.get("searchTerm");
   const [term, setTerm] = useState(searchTerm || "");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!term.trim()) return;
      router.push(`/search/web?searchTerm=${term}`);
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-4xl items-center"
      >
         <input
            type="text"
            className="w-full focus:outline-none"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
         />
         <RxCross2
            className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
            onClick={() => setTerm("")}
         />
         <AiOutlineSearch
            className="text-3xl hidden sm:inline-flex text-gray-900 cursor-pointer border-l-2 pl-2"
            onClick={handleSubmit}
         />
      </form>
   );
}
