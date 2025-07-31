import React from 'react'
import "./Help.css"

const Help = () => {
  return (
    <div className="container help">
      <h1 className="helph1">
        We helped more then <br /> 100 companies.
      </h1>
      <p className="helpp">
        In most cases, the law provides the means to protect the interest of the
        buyers.
      </p>

      <div className="button-input1">
        <input
          type="text"
          placeholder="What are you looking for"
          className="search-input1"
        />
        <button className="search-btn1">
          <p>Search Now</p>
        </button>
      </div>
    </div>
  );
}

export default Help