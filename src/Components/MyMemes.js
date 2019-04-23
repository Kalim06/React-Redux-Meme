import React, { Component } from "react";
import { connect } from "react-redux";

class MyMemes extends Component {
  render() {
    console.log("mymemes", this.props);

    return (
      <div>
        {this.props.myMeme.map((meme, index) => {
          return <img key={index} src={meme.data.url} alt="my-meme" className="my-meme-img" />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myMeme: state.myMeme
  };
}

export default connect(mapStateToProps)(MyMemes);
