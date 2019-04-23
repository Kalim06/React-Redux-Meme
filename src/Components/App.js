import React, { Component } from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import { Form, FormGroup, FormLabel, Button, FormControl } from "react-bootstrap";
import MyMemes from "./MyMemes";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    };
  }

  render() {
    return (
      <div>
        {/*  */}
        <h1>
          <u>Welcome To Meme Generator!</u>
        </h1>
        <MyMemes />
        <h4>
          <i>Write Some Text</i>
        </h4>
        {/*  */}
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>{" "}
            <FormControl type="text" onChange={event => this.setState({ text0: event.target.value })} />
          </FormGroup>
          {/*  */}
          <FormGroup>
            <FormLabel>Bottom</FormLabel>{" "}
            <FormControl type="text" onChange={event => this.setState({ text1: event.target.value })} />
          </FormGroup>
        </Form>
        {/*  */}
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} text0={this.state.text0} text1={this.state.text1} />;
        })}
        <div className="memeButton" onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}>
          Load more ...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
