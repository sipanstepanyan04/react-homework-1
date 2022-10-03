import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({
      ...JSON.parse(localStorage.getItem("state")),
    });
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <button className="buttonAdd" onClick={this.increaseCount}>
          +
        </button>
        <span className="count">{this.state.count}</span>
        <button
          className="buttonMin"
          disabled={this.state.count <= 0}
          onClick={this.decreaseCount}
        >
          -
        </button>
        <button className="reset" onClick={this.resetCount}>
          Reset
        </button>

        <div></div>
      </div>
    );
  }
}

export { Counter };
