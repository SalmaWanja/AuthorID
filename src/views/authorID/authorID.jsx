import React, { Component } from "react";
import axios from "axios";

class AuthorID extends Component {
  constructor(props) {
    super(props);
    this.state = { rawText: "", textWithoutStopwords: "", stemmedText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.removeStopwords = this.removeStopwords.bind(this);
    this.stem = this.stem.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  removeStopwords() {
    //   submit data to api
    console.log(this.state.rawText);
    axios
      .post("http://127.0.0.1:5000/author_id/api/remove_stopwords", {
        raw_text: this.state.rawText
      })
      .then(response => {
        console.log(response);
        this.setState({ textWithoutStopwords: response.data.processed_text });
        this.stem(response.data.processed_text);
      })
      .catch(err => {
        console.log(err);
      });
  }

  stem(text) {
    //   submit data to api
    axios
      .post("http://127.0.0.1:5000/author_id/api/stem", {
        raw_text: text
      })
      .then(response => {
        console.log(response);
        this.setState({ stemmedText: response.data.processed_text });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="appContainer">
        <h2>Welcome! Author ID</h2>
        <h4>Enter some text below</h4>
        <form className="form">
          <label className="formLabel">Raw text</label>
          <textarea
            name="rawText"
            id="rawText"
            onChange={this.handleChange}
            className="formField"
            rows={4}
            value = {this.state.rawText}
            placeholder="Enter some text to analyze"
          />
        </form>
        <button className="submitButton" onClick={() => this.removeStopwords()}>
          Analyze
        </button>
        <div className="otherContent">
          <span className="bodyLabel">Removed stopwords</span>
          <div className="text">
            <span>{this.state.textWithoutStopwords}</span>
          </div>
          <span className="bodyLabel">Stemmed</span>
          <div className="text">
            <span>{this.state.stemmedText}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthorID;
