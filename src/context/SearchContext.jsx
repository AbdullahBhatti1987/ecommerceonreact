import { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

  if(search === ""){
    console.log("Search Box is Blank")
  } else {
    console.log("Search Item", search)
  }

  return (
    <SearchContext.Provider value={{setSearch, search }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;