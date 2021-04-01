import React from "react";
import "./Header.css";
import SearchName from "../SearchName";

function Header () {
    return (
        <div className="header">
            <h1>Employees Directory</h1>
            <h3>Filter by name tab or search your Employees by name↓</h3>
            <SearchName />
        </div>
    )
}

export default Header;