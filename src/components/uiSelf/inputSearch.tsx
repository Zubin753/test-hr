import React from 'react';

const InputSearch = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        className="flex w-1/12 h-9 pl-6 md:w-11/12 md:pl-8 rounded-xl border border-black bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
        placeholder="Search"/>
    </>
  );
};

export default InputSearch;