import { connect } from "react-redux";
import { changeFilter } from "../actions";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Footer);
