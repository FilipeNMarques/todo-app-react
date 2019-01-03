import React from "react";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription } from "./todoActions";

//Components
import Grid from "../template/grid";
import IconButton from "../template/iconButon";

const TodoForm = props => {
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
          onChange={props.changeDescription}
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

const mapStateToProps = state => ({
  description: state.todo.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
