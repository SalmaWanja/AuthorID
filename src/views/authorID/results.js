import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="otherContent">
          <span className="bodyLabel">
            <b>Predicted Author</b>
          </span>
          <div className="text">
            <span style={{ display: "block", fontWeight: "600" }}>
              {this.props.location.state.prediction.predicted_class}
            </span>
            <br />
            {this.props.location.state.prediction && (
              <>
                Stylometric Features
                <ul>
                  <li>
                    Average sentence Length:{" "}
                    <b>
                      {
                        this.props.location.state.prediction
                          .average_sentenceLength
                      }
                    </b>
                  </li>
                  <li>
                    Frequency of stopwords:{" "}
                    <b>
                      {this.props.location.state.prediction.stopwords_frequency}
                    </b>
                  </li>
                  <li>
                    Simple sentence distribution{" "}
                    <b>
                      {
                        this.props.location.state.prediction
                          .simple_sentence_distribution
                      }
                    </b>
                  </li>
                  <li>
                    Compound sentence distribution:{" "}
                    <b>
                      {
                        this.props.location.state.prediction
                          .compound_sentence_distribution
                      }
                    </b>
                  </li>
                  <li>
                    Complex sentence distribution:{" "}
                    <b>
                      {
                        this.props.location.state.prediction
                          .complex_sentence_distribution
                      }
                    </b>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
