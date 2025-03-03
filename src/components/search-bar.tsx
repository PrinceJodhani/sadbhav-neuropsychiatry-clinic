'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  defaultValue?: string;
}

export default function SearchBar({ defaultValue = '' }: SearchBarProps) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(defaultValue);
  const searchParams = useSearchParams();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchInput.trim();
    // Push a new route with ?q=someQuery
    router.push(`/blogs?q=${encodeURIComponent(query)}`);
  };

  // Minimal suggestion logic:
  const showHashtagSuggestion = searchInput.startsWith('#');

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center gap-2 w-full max-w-xl mx-auto mb-6">
      <div className="relative w-full">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search blogs (e.g. #Anxiety or a title)..."
          className="w-full rounded-full border-2 border-gray-300 py-2 px-4 pl-10 
                     text-sm placeholder-gray-400 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 transition"
        />
        <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* If user typed '#' at the start, show a small hint */}
      {showHashtagSuggestion && (
        <p className="text-xs text-blue-600">
          Searching by hashtag. You can type “#depression”, “#anxiety” etc.
        </p>
      )}

      <button
        type="submit"
        className="mt-2 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm 
                   font-medium rounded-full hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
