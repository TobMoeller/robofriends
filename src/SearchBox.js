import React, { Fragment } from "react";

const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots" 
                onChange={searchChange}
            />
        </Fragment>
    );
}

export default SearchBox;