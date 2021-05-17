/*
//1
import React from "react";
import { render } from "react-dom";

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "top secret!"
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState(() => ({
      name: "Mark"
    }));
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>reveal the secret!</button>
      </div>
    );
  }
}

render(<Secret />, document.getElementById("root"));
*/




/*
//2
import React from "react";
import { render } from "react-dom";

class ShallowMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Mark", //#A
        colors: {
          favorite: ""
        }
      }
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      user: {
        //#B
        colors: {
          favorite: "blue"
        }
      }
    });
  }
  render() {
    return (
      <div>
        <h1>
          My favorite color is {this.state.user.colors.favorite} and my name is{" "}
          {this.state.user.name}
        </h1>
        <button onClick={this.onButtonClick}>show the color!</button>
      </div>
    );
  }
}

render(<ShallowMerge />, document.getElementById("root"));
*/



/*
//3
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Counter extends React.Component {
  static propTypes = {
    //#A
    incrementBy: PropTypes.number,
   // onIncrement: PropTypes.func.isRequired //#B
  };
  static defaultProps = {
    incrementBy: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState(function(prevState, props) {			
      return { count: prevState.count + props.incrementBy };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    );
  }
}

render(<Counter incrementBy={1} />, document.getElementById("root"));
*/


/*
//4 Компонент без состояния
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

function Greeting(props) {
  return <div>Hello {props.for}!</div>;
}

Greeting.propTypes = {
  for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
  for: "friend"
};

render(<Greeting name="Mark" />, document.getElementById("root"));
*/



/*
//5 Отношения между компонентами
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const UserProfile = props => {
  return <img src={`https://source.unsplash.com/user/${props.username}`} />;
};
UserProfile.propTypes = {
  pagename: PropTypes.string
};

UserProfile.defaultProps = {
  pagename: "erondu"
};

const UserProfileLink = props => {
  return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>;
};

const UserCard = props => {
  return (
    <div>
      <UserProfileLink username={props.username} />
      <UserProfile username={props.username} />
    </div>
  );
};

render(<UserCard username="erondu" />, document.getElementById("root"));
*/




//6 Жизненный цикл компонентов
//Родительский компонент прослушивает изменения в поле ввода и предоставляет новые свойства дочернему через состояние.
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = (function() {
    console.log("ChildComponent : defaultProps");
    return {};
  })();
  constructor(props) {
    super(props);
    console.log("ChildComponent: state");
    this.state = {
      name: "Mark"
    };
    this.oops = this.oops.bind(this);
  }
  UNSAFE_componentWillMount() {
    console.log("ChildComponent : componentWillMount");
  }
  componentDidMount() {
    console.log("ChildComponent : componentDidMount");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("ChildComponent : componentWillReceiveProps()");
    console.log("nextProps: ", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("<ChildComponent/> - shouldComponentUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("<ChildComponent/> - componentWillUpdate");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
  }
  componentDidUpdate(previousProps, previousState) {
    console.log("ChildComponent: componentDidUpdate");
    console.log("previousProps:", previousProps);
    console.log("previousState:", previousState);
  }
  UNSAFE_componentWillUnmount() {
    console.log("ChildComponent: componentWillUnmount");
  }
  oops() {
    this.setState(() => ({ oops: true }));
  }
  render() {
    if (this.state.oops) {
      throw new Error("Something went wrong");
    }
    console.log("ChildComponent: render");
    return [
      <div key="name">Name: {this.props.name}</div>,
      <button key="error" onClick={this.oops}>
        Create error
      </button>
    ];
  }
}

class ParentComponent extends React.Component {
  static defaultProps = (function() {
    console.log("ParentComponent: defaultProps");
    return {
      true: false
    };
  })();
  constructor(props) {
    super(props);
    console.log("ParentComponent: state");
    this.state = { text: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }
  UNSAFE_componentWillMount() {
    console.log("ParentComponent: componentWillMount");
  }
  componentDidMount() {
    console.log("ParentComponent: componentDidMount");
  }
  UNSAFE_componentWillUnmount() {
    console.log("ParentComponent: componentWillUnmount");
  }
  onInputChange(e) {
    const text = e.target.value;
    this.setState(() => ({ text: text }));
  }
  componentDidCatch(err, errorInfo) {
    console.log("componentDidCatch");
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({ err, errorInfo }));
  }
  render() {
    console.log("ParentComponent: render");
    if (this.state.err) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input
        key="input"
        value={this.state.text}
        onChange={this.onInputChange}
      />,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ];
  }
}

render(<ParentComponent />, document.getElementById("root"));


