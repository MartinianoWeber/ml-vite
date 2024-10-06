import React from "react";
import SearchIcon from "../../atoms/SearchIcon/SearchIcon";

interface SearchButtonProps {
  onClick: () => void;
  className?: string;
}

export default function SearchButton({
  onClick,
  className,
}: SearchButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      <SearchIcon className={"search-bar__icon"} />
    </button>
  );
}
