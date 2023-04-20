/* eslint-disable max-len */
import React, { Component } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { handleClick, handleDownload } from "../../GoogleAnalytics";

import logo from "../../assets/pixel-pycb.svg";
import demogame from "../../assets/demo-game.webp";
import demogui from "../../assets/demo-gui.webp";

import styles from "./ReadMe.module.css";

const ReleaseLink = dynamic(() => import("../release/ReleaseLink"));
const Badge = dynamic(() => import("../badge/Badge"));

/**
 * Component for project description
 */
export default class ReadMe extends Component {
  /**
   * react render override
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className={styles.ReadMe}>
        <div className={styles.block}>
          <div className={styles.headerblock}>
            <div className={styles.textblock}>
              <h1>py-clash-bot</h1>
              <Badge />
            </div>
            <div className={styles.logoblock}>
              <Image
                className={styles.logo}
                alt="py-clash-bot logo"
                src={logo}
                content="max-age=259200"
              />
            </div>
          </div>
          <p className={styles.description}>
            py-clash-bot is an open-source application that allows users to
            automate their Clash Royale gameplay on Windows using an emulated
            Android phone. The bot uses a combination of image recognition,
            mouse control, and Android emulation to perform a variety of tasks
            without user intervention.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Features</h2>
          <ul>
            <li>
              Automated level-up, clan wars, card requesting, battlepass
              progress, card mastery, card upgrade, chest opening, and MORE!
            </li>
            <li>
              Completely undetectable (over two years of use across multiple
              accounts with zero bans)!
            </li>
            <li>Multi-account support</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2>Installation</h2>
          <ol>
            <li>
              <ReleaseLink
                child={
                  <button className={styles.downloadbutton}>Download</button>
                }
                onClick={handleDownload}
              />{" "}
              and run the latest windows installer
            </li>
            <li>Run the shortcut on the desktop</li>
            <li>
              The program will automatically install MEmu, follow the
              installation prompts
            </li>
            <li>
              You must manually install Clash Royale on your new MEmu client.
            </li>
            <li>
              You must complete the tutorial (takes 30 seconds) then sign into
              your account using the SuperCell ID login (or use the fresh
              account).
            </li>
          </ol>
        </div>
        <div className={styles.block}>
          <h2>Usage</h2>
          <ol>
            <li>Configure the jobs to perform, and number of accounts</li>
            <li>
              Click the <code>Start</code> button to begin automation
            </li>
            <li>
              Enjoy the benefits of always-on farming with the py-clash-bot
              taking care of the heavy lifting for you
            </li>
          </ol>
        </div>
        <div className={styles.block}>
          <h2>Demo</h2>
          <div className={styles.demo}>
            <Image
              className={styles.demoimage}
              alt="Clash Royale gameplay"
              src={demogame}
              placeholder="blur"
              priority
            />
            <Image
              className={styles.demoimage}
              alt="User interface"
              src={demogui}
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <div className={styles.block}>
          <h2>Contribute</h2>
          <p>
            We welcome contributions to the py-clash-bot project. If you have an
            idea for a new feature or have found a bug, please open an issue on
            the{" "}
            <a
              href="https://github.com/matthewmiglio/py-clash-bot/issues"
              onClick={handleClick}
            >
              issues tab
            </a>{" "}
            or submit a pull request.
          </p>
          <p>
            The source code can be viewed on{" "}
            <a
              href="https://github.com/matthewmiglio/py-clash-bot"
              onClick={handleClick}
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
