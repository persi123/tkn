import React from "react";
import "./index.css";
import logo from "./Bitfex-symbol.svg";
import art from "./art.png";
import earn from "./yield.svg";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Fade, Slide, Flip } from "react-reveal";
import tkn from "./promo-bg.png";
import inst1 from "./stellar-round.png";
import inst2 from "./counterparty-round.png";
import inst3 from "./eos-round.png";
import inst4 from "./lisk.png";
import ComingSoon from "./coming-soon.svg"
export default function index() {
  return (
    <div>
      {/* <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        <img alt="Brand" src="..."/>
      </a>
    </div>
  </div>
</nav> */}
      <div
        className="page-header"
        style={{
          alignItems: "center",
          color: "white",
    display:"none"
        }}
        id="main"
      >
        {/* <h1>Alpha 5</h1> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "gray",
          }}
        >
          <img
            src={logo}
            style={{
              margin: "19px",
              padding: "10px",
              height: "35px",
              width: "27px",
            }}
          />
          <h2>BitFex</h2>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#1e2641",
          color: "white",
          flexDirection: "row",
          alignItems: "baseline",
        }}
        className="d-flex justify-content-around"
        id="heder"
      >
        <div>
          <h1>Bfx Exchange Token</h1>
          <p>
            Rewards traders & community members for their contributions to Bfx!
          </p>
          <FlipCountdown
            hideYear
            hideMonth
            theme="dark" // Options (Default: dark): dark, light.
            size="medium"
            endAt={"2022-12-12 01:26:58"} // Date/Time
          />
        </div>
        <div style={{ height: "600px", width: "700px" }}>
          <img src={art} style={{ width: "inherit" }} />
        </div>
      </div>
      <div>
        <Tabs defaultIndex={0}>
          <TabList
            className="d-flex"
            style={{ listStyle: "none", justifyContent: " center" }}
          >
            <Tab>
              {" "}
              <button className="btn active">Token Home</button>
            </Tab>
            <Tab>
              {" "}
              <button class="btn ">Trade Farming</button>
            </Tab>
            <Tab>
              {" "}
              <button class="btn ">Raferral Mining</button>
            </Tab>
            <Tab>
              {" "}
              <button class="btn ">Liquidity Mining</button>
            </Tab>
          </TabList>

          <TabPanel>
            <Flip right>
              <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "18rem" }} id="card1">
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Earn Token</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Mine DETO by trading, providing liquidity or referring
                      users to Delta
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>{" "}
                <div className="card" style={{ width: "18rem" }} id="card2">
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Earn Staking Yield</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Stake your DETO to earn a handsome yield on it
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>{" "}
                <div className="card" style={{ width: "18rem" }} id="card3">
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Grow with Bitfex</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Value of Bitfex Token ∝ Bitfex’s revenues.As the exchange
                      grows, so do the rewards
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>
              </div>
            </Flip>
          </TabPanel>
          <TabPanel>
            <div className="d-flex justify-content-center">
              <Fade right>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Earn Token</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Mine DETO by trading, providing liquidity or referring
                      users to Delta
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="card" style={{ width: "18rem" }} id="card2">
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Earn Staking Yield</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Stake your DETO to earn a handsome yield on it
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>
              </Fade>
              <Fade>
                {" "}
                <div className="card" style={{ width: "18rem" }} id="card3">
                  <div className="card-body">
                    <img src={earn} />
                    <h5 className="card-title">Grow with Bitfex</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                      Value of Bitfex Token ∝ Bitfex’s revenues.As the exchange
                      grows, so do the rewards
                    </p>
                    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                  </div>
                </div>
              </Fade>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div
        style={{
          display:"flex",
          backgroundColor: "#1e2641",
          color: "white",
          flexDirection: "row",
          alignItems: "center",
         justifyContent:"space-evenly",
         marginTop: "13px"
        }}
      >
        <div><img src={tkn}/></div>
        <div style={{ width:"540px",padding:"38px"}}>
          <p style={{opacity: "0.3"}}>About Token</p>
          <h1>Token Sale</h1>
          <div id="token-info">
            <p>
              <b>Token name:</b>Bfx Token
            </p>
            <p>
              <b>Ticker Symbol:</b>Bfx
            </p>
            <p>
              <b>Currency Symbol Image :</b>Currency Symbol Image
            </p>
            <p>
              <b>Starting Price Pre-ICO:</b>Bfx for USD 0.08
            </p>
            <p>
              <b>Maximum Eroiy</b>Cryptoland for USD 0.12
            </p>
            <p>
              <b>produced:</b>
            </p>
            <p>
              <b>Maximum Eroiy for Sale:</b>2 billion (technical limit)
            </p>
            <p>
              <b>Fundraising Goal:</b>USD 48 million
            </p>
            <p>
              <b>Fundraising Goal:</b>USD 48 million
            </p>
            <p>
              <h2>General description</h2>
              <p>
                Cryptoland will be released on the basis of Ethereum platform
                and fully comply with ERC20* standard.
              </p>
              <p>
                Support of this standard guarantees the compatibility of the
                token with third-party services (wallets, exchanges, listings,
                etc.), and provides easy integration.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="inst">
        <div>
          <img src={ComingSoon} className="coming"/>
      <div class="card" style={{width: "18rem;"}} id="offer-cards">
  <img src={inst1} class="card-img-top" alt="..."/>
  <h2>Referral Mining</h2>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div>
<img src={ComingSoon} className="coming"/>
<div class="card" style={{width: "18rem;"}} id="offer-cards">
  <img src={inst2} class="card-img-top" alt="..."/>
  <h2>Liquidity Mining</h2>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div>
<img src={ComingSoon} className="coming"/>
<div class="card" style={{width: "18rem;"}} id="offer-cards">
  <img src={inst3} class="card-img-top" alt="..."/>
  <h2>Trade Farming</h2>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div>
<img src={ComingSoon} className="coming"/>
<div class="card" style={{width: "18rem;"}} id="offer-cards">
  <img src={inst4} class="card-img-top" alt="..."/>
  <h2>Staking</h2>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
      </div>
    </div>
  );
}
