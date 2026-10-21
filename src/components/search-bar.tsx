'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  defaultValue?: string;
  tags?: string[];
}

export default function SearchBar({ defaultValue = '', tags = [] }: SearchBarProps) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(defaultValue);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchInput.trim();
    // Push a new route with ?q=someQuery (or back to the full list).
    router.push(query ? `/blogs?q=${encodeURIComponent(query)}` : '/blogs');
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <form onSubmit={handleSearch} role="search" className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          id="blog-search"
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search articles or #topics…"
          className="h-14 w-full rounded-full border border-border bg-card pl-14 pr-32 text-base text-foreground shadow-soft outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/15"
        />
        <button type="submit" className="btn btn-primary absolute right-1.5 top-1/2 h-11 -translate-y-1/2 px-5 text-sm">
          Search
        </button>
      </form>

      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blogs?q=${encodeURIComponent(`#${tag}`)}`}
              className="chip transition-colors hover:border-primary/40 hover:text-primary"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
