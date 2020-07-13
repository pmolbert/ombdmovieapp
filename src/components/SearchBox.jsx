import React from "react";

const SearchBox = (props) => {
  let textInput = React.createRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (textInput.current.value.length > 0) {
      props.searchHandler(textInput.current.value);
    }
  };
  return (
    <div>
      <form>
        <div>
          <label for="title">Movie title:</label>
          <input ref={textInput} type="text" id="title" name="title"></input>
        </div>
        <div>
          <button onClick={handleClick}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
