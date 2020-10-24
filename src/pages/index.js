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
import ComingSoon from "./coming-soon.svg";

import Flippy, {FrontSide, BackSide } from "react-flippy";
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
          display: "none",
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
        <div className="mainImg">
          <img src={art} style={{ width: "inherit" }} />
        </div>
      </div>
      <div>
        <Tabs defaultIndex={0}>
          <TabList
            className="d-flex"
            style={{ listStyle: "none", justifyContent: " center" }}
            id="tabs"
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
            
              <div className="d-flex justify-content-center" id="animeCards">
              <Flippy
                 flipOnHover={true} // default false
                flipOnClick={false}// default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                 style={{ width: "250px", height: "300px", marginLeft:"15px" }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    boxShadow: "0 0 51px rgba(232, 95, 112, 0.74)",
                    backgroundColor:"#e85f70",
                    height: "300px!important",
                    width: "250px!important",
                    color:"white"
                  }}
                >
                 <img src={earn} />
                    <h5 className="card-title">Earn Token</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                     
                    </p>
                </FrontSide>
                <BackSide style={{ backgroundColor:"#e85f70",color:"white" ,padding: "32px",
    fontSize: "17px"}}>
                Mine DETO by trading, providing liquidity or referring
                      users to Delta
                </BackSide>
              </Flippy>
              <Flippy
                 flipOnHover={true} // default false
                flipOnClick={false}// default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                 style={{ width: "250px", height: "300px",  marginLeft:"15px" }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    boxShadow: "0 0 51px rgba(250, 137, 54, 0.74)",
                    backgroundImage: "linear-gradient(-234deg, #ea9d64 0%, #fa8936 100%)",
                    backgroundColor:"#fa8936",
                    height: "300px!important",
                    width: "250px!important",
                    color:"white"
                  
                  }}
                >
                 <img src={earn} />
                    <h5 className="card-title">Earn Staking Yield</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                     
                    </p>
                </FrontSide>
                <BackSide style={{ boxShadow: "0 0 51px rgba(250, 137, 54, 0.74)",
                    backgroundImage: "linear-gradient(-234deg, #ea9d64 0%, #fa8936 100%)",
                    backgroundColor:"#fa8936",color:"white",padding: "32px",
                    fontSize: "17px" }}>
                Stake your DETO to earn a handsome yield on it
                </BackSide>
              </Flippy>
              <Flippy
                 flipOnHover={true} // default false
                flipOnClick={false}// default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                 style={{ width: "250px", height: "300px",marginLeft:"15px" }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    boxShadow: "0 0 51px rgba(75, 194, 83, 0.74)",
                    backgroundImage: "linear-gradient(-234deg, #6ae472 0%, #4bc253 100%)",
                    backgroundColor:"#fa8936",
                    height: "300px!important",
                    width: "250px!important",
                    color:"white"
                  }}
                >
                 <img src={earn} />
                    <h5 className="card-title">Grow with Bitfex</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                     
                    </p>
                </FrontSide>
                <BackSide style={{ boxShadow: "0 0 51px rgba(75, 194, 83, 0.74)",
                    backgroundImage: "linear-gradient(-234deg, #6ae472 0%, #4bc253 100%)",
                    color:"white" ,padding: "32px",
                    fontSize: "17px"}}>
                Value of Bitfex Token ∝ Bitfex’s revenues.As the exchange
                      grows, so do the rewards
                </BackSide>
              </Flippy>
              </div>
            </Flip>
          </TabPanel>
          <TabPanel>
            <div className="d-flex justify-content-center" id="animeCards">
              <Fade right>
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
          display: "flex",
          backgroundColor: "#1e2641",
          color: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "13px",
        }}
        id="tokn"
      >
        <div className="aboutToken">
          <img src={tkn} style={{ width: "inherit" }} />
        </div>
        <div style={{ width: "540px", padding: "38px" }}>
          <p style={{ opacity: "0.3" }}>About Token</p>
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
          <img src={ComingSoon} className="coming" />
          <div class="card" style={{ width: "18rem;" }} id="offer-cards">
            <img src={inst1} class="card-img-top" alt="..." />
            <h2>Referral Mining</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={ComingSoon} className="coming" />
          <div class="card" style={{ width: "18rem;" }} id="offer-cards">
            <img src={inst2} class="card-img-top" alt="..." />
            <h2>Liquidity Mining</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={ComingSoon} className="coming" />
          <div class="card" style={{ width: "18rem;" }} id="offer-cards">
            <img src={inst3} class="card-img-top" alt="..." />
            <h2>Trade Farming</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={ComingSoon} className="coming" />
          <div class="card" style={{ width: "18rem;" }} id="offer-cards">
            <img src={inst4} class="card-img-top" alt="..." />
            <h2>Staking</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className="token-distribution">
      <h1 >Token Distribution</h1>
      <div className="bg-tkn">Token Distribution</div>
      <div>
        <h2>Allocation of funds</h2>
        <p>Total token supply - 200000</p>
      </div>
      <ul class="chart__legend">
							<li>
								<span style={{width: "101px"}}></span>
								9% Founders and Team
							</li>
							<li>
								<span style={{width: "153px"}} ></span>
								13% Reserved Funding
							</li>
							<li>
								<span style={{width: "34px"}} ></span>
								2% Advisors
							</li>
							<li>
								<span style={{width: "289px"}}></span>
								25% Distribute to Community
							</li>
							<li>
								<span style={{width: "22px"}} ></span>
								1% Bounty campaign
							</li>
						</ul>
    </div>
    <div className="token-vesting">
      <h1>Token Vesting Rule</h1>
      <div style={{width:"726px"}}>
      {/* <!--Table--> */}
<table class="table table-striped w-auto" id="vest-tabl">

  {/* <!--Table head--> */}
  <thead>
    <tr>
      <th>Catogery</th>
      <th>Upfront</th>
      <th>Wait Period</th>
      <th>Vesting Period</th>
    
    </tr>
  </thead>
  {/* <!--Table head-->

  <!--Table body--> */}
  <tbody>
    <tr class="table-info">
      {/* <th scope="row">1</th> */}
      <th scope="row">Mined Tokens</th>
      <td>0</td>
      <td>0</td>
      <td>45 days</td>
    </tr>
    <tr>
      <th scope="row">Private Sale Investors</th>
      <td>0</td>
      <td>1-3 months</td>
      <td>6 months</td>
    </tr>
    <tr class="table-info">
      <th scope="row">Treasury</th>
      <td>20%</td>
      <td>1 month</td>
      <td>12 months</td>
    </tr>
    <tr>
      <th scope="row">Advisors and Employees</th>
      <td>0</td>
      <td>6 months</td>
      <td>6 months</td>
    </tr>
    <tr class="table-info">
      <th scope="row">Equity Holders (ex founders)</th>
      <td>0</td>
      <td>6 months</td>
      <td>12 months</td>
        </tr>
    <tr>
      <th scope="row">Founders</th>
      <td>0</td>
      <td>6 months</td>
      <td>12 months</td>
    </tr>
  </tbody>
  {/* <!--Table body--> */}


</table>
{/* <!--Table--> */}
      </div>
    </div>
    </div>
  );
}
