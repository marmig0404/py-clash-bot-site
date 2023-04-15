import React, { Component } from "react";
import PropTypes from "prop-types";
import { handleDownload } from "../../GoogleAnalytics";

const API_URL =
  "https://api.github.com/repos/matthewmiglio/py-clash-bot/releases/latest";

/**
 * Component for latest release download link
 */
export default class ReleaseLink extends Component {
  /**
   * constructor to set states
   * @param {*} props component props
   */
  constructor(props) {
    super(props);
    this.state = {
      release_url:
        "https://github.com/matthewmiglio/py-clash-bot/releases/latest",
    };
  }
  /**
   * make api call to get download count on release
   */
  getLatestReleaseInfo() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ release_url: data.assets[0].browser_download_url });
      });
  }
  /**
   * on mount get release info
   */
  componentDidMount() {
    this.getLatestReleaseInfo();
  }
  /**
   * react render override
   * @return {JSX.Element}
   */
  render() {
    return (
      <a
        className="release_link"
        href={this.state.release_url}
        onClick={(event) => handleDownload(event, this.state.release_url)}
        rel="preconnect"
      >
        {this.props.child}
      </a>
    );
  }
}
ReleaseLink.propTypes = {
  child: PropTypes.element,
};