import React, { useContext } from "react";
import DataBody from "../DataBody";
import "./DataTable.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="head"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                    
                                >
                                    {name} ⬇
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <DataBody />
            </table>
        </div>
    );
}

export default DataTable;