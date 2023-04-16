import {Component} from 'react';

const apiUrl =
  'https://api.github.com/repos/matthewmiglio/py-clash-bot/releases/latest';

/**
 * Component for release download count
 */
export default class ReleaseDownloadCount extends Component {
  /**
   * constructor to set states
   * @param {*} props component props
   */
  constructor(props) {
    super(props);
    this.state = {
      download_count: 0,
    };
  }
  /**
   * make api call to get download count on release
   */
  getLatestReleaseInfo() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          let downloadCount = 0;
          for (const element of data.assets) {
            downloadCount += element.download_count;
          }
          this.setState({download_count: downloadCount});
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
   * @return {string}
   */
  render() {
    return this.state.download_count;
  }
}
