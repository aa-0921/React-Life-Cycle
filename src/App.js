import React from "react";

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVal: 0,
    };
    this.incrementState = this.incrementState.bind(this);
    // thisを束縛して、必ずこのクラスのstateに働くようにしてる
  }
  //Stateの加算
  incrementState() {
    console.log("レンダリングされました。stateの加算");
    this.setState({
      stateVal: this.state.stateVal + 1,
    });
  }

  // ライフサイクルメソッドの種類
  componentWillMount() {
    console.log("コンポーネントのマウント前, componentWillMount");
  }
  componentDidMount() {
    console.log("コンポーネントのマウント後, componentDidMount");
  }
  componentWillReceiveProps() {
    console.log(
      "コンポーネントが受け取るpropsが変化, componentWillReceiveProps"
    );
  }
  shouldComponentUpdate() {
    console.log("コンポーネントがアップデートされる前1, shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("コンポーネントがアップデートされる前2, componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("コンポーネントがアップデートされた後, componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("コンポーネントがアンマウントされた後, componentWillUnmount");
  }
  render() {
    return (
      <div>
        <p>props:{this.props.propVal}</p>
        <p>state:{this.state.stateVal}</p>
        <button onClick={this.incrementState}>stateの加算</button>
      </div>
    );
  }
}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propVal: 0,
      isComponent: false,
    };
    this.incrementProps = this.incrementProps.bind(this);
    this.ｍountComponent = this.ｍountComponent.bind(this);
  }

  incrementProps() {
    console.log("レンダリングされました。 propsの加算");
    this.setState({
      propVal: this.state.propVal + 1,
    });
  }
  ｍountComponent() {
    console.log("レンダリングされました。表示/非表示");
    this.setState({
      isComponent: !this.state.isComponent,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.ｍountComponent}>
          Numberコンポーネントのマウント切り替え
        </button>
        {/* true, falseの入れ替えで表示非表示を変えてる */}
        {(() => {
          if (this.state.isComponent) {
            return <Number propVal={this.state.propVal} />;
          } else {
            return null;
          }
        })()}
        <button onClick={this.incrementProps}>propsの加算</button>
      </div>
    );
  }
}

export default MyComponent;
