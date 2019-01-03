import React from "react";

//Components
import Grid from "../template/grid";
import IconButton from "../template/iconButon";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form" className="todoForm">
      <div className="col-xs-12 col-md-9 col-lg-10">
        <input
          id="description"
          type="text"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
        />
      </div>
      <div className="col-xs-12 col-md-3 col-lg-2">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton style="info" icon="search" onClick={props.handleSearch} />
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </div>
    </div>
  );
};
