import React from "react";

const DataAreaContext = React.createContext({
    handleSearchChange: (e) => {
        console.log(e.target.value); 
    }
});

export default DataAreaContext;