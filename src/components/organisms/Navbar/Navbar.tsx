import React, { useEffect } from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/items?search=${searchTerm}`);
  };

  useEffect(() => {
    const search = new URLSearchParams(window.location.search).get("search");
    setSearchTerm(search || "");
  }, []);

  return (
    <nav className="navbar">
      <Logo className={"navbar__logo"} />
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />
    </nav>
  );
}
