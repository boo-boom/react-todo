import React, { Component } from "react";

class Footer extends Component {
  handleClick(filter) {
    this.props.changeFilter(filter);
  }

  render() {
    const { filter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button disabled={filter === "all"} onClick={this.handleClick.bind(this, 'all')}>All</button>
        <button disabled={filter === "active"} onClick={this.handleClick.bind(this, 'active')}>Active</button>
        <button disabled={filter === "completed"} onClick={this.handleClick.bind(this, 'completed')}>Completed</button>
      </div>
    );
  }
}

export default Footer;
