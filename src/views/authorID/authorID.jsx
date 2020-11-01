import React, { Component } from "react";
import axios from "axios";

class AuthorID extends Component {
  constructor(props) {
    super(props);
    this.state = { rawText: "", prediction: "" };
    this.handleChange = this.handleChange.bind(this);
    this.getprediction = this.getPrediction.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  getPrediction() {
    //   submit data to api
    console.log(this.state.rawText);
    axios
      .post("http://127.0.0.1:5000/author_id/api/predict_class", {
        raw_text: this.state.rawText
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/results', { prediction: response.data })
        // this.setState({ prediction: response.data.predicted_class });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="appContainer">
        <h2><i>Welcome to Author ID!!</i></h2>
        <h4>Enter your article below... </h4>

        <form className="form">
          <label className="formLabel">Raw text</label>
          <textarea
            name="rawText"
            id="rawText"
            onChange={this.handleChange}
            className="formField"
            rows={4}
            value={this.state.rawText}
            placeholder="Enter some text to analyze"
          />
        </form>
        <button className="submitButton" onClick={() => this.getPrediction()}>
          Analyze
        </button>
      </div>
    );
  }
}
export default AuthorID;