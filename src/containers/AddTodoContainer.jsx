// 容器组件：获取数据/处理数据
import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(AddTodo);