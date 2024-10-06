import React from "react";
import Input from "../../atoms/Input/Input";
import SearchIcon from "../../atoms/SearchIcon/SearchIcon";
import SearchButton from "../SearchButton/SearchButton";
interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: SearchBarProps) {
  const handleSearchWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <Input
        className={"search-bar__input"}
        value={value}
        onChange={onChange}
        onKeyDown={handleSearchWithEnter}
        placeholder="Nunca dejes de buscar"
      />
      <SearchButton onClick={onSearch} className={"search-bar__button"} />
    </div>
  );
}
