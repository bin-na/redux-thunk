import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ahuhuActions } from "../actions";

const Same = (props) => {
  const handleAlert = () => {
    props.actions.alert("I'm a trash dev");
  };

  React.useEffect(() => {
    if (props && props.data && props.data.text) {
      alert(props.data.text);
    }
  }, [props.data]);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Hi!</h1>
      <button onClick={handleAlert}>hello Ahuhu</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.ahuhu };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(ahuhuActions, dispatch) };
};

const SamePage = connect(mapStateToProps, mapDispatchToProps)(Same);

export { SamePage as Same };
