import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";


const SearchName = () => {
    const context = useContext(DataAreaContext);
    console.log("searchnamecontext", context)

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={context.handleSearchChange}
                />
                <button className="btn" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default SearchName;