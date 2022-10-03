import { Component } from "react";
import { Counter } from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
    };
  }

  setFinish = () => {
    this.setState({
      isFinished: true,
    });
  };

  componentDidMount() {
    this.setState({
      ...JSON.parse(localStorage.getItem("state")),
    });
  }

  render() {
    return (
      <div>
        <Counter isFinished={this.state.isFinished} />
      </div>
    );
  }
}

export { App };
