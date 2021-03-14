import React from "react";

import A from "../../assets/a.png";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <h2>Dashboard</h2>
        <div className="timer-section">
          <div className="clock">
            <div className="clock-time">
              <h2>10</h2>
              <p>Day</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>12</h2>
              <p>Hours</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>30</h2>
              <p>Minutes</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>14</h2>
              <p>Seconds</p>
            </div>
          </div>
          <button>Buy Powder</button>
        </div>
      </div>
      <div className="cards">
        <div className="box">
          <div className="outbox">
            <p>Total value locked</p>
          </div>
          <div className="inbox">
            <span className="price">20 000</span>
            <span className="currency">USD</span>
          </div>
        </div>
        <div className="box">
          <div className="outbox">
            <p>POWDER price</p>
          </div>
          <div className="inbox">
            <span className="price">20 000</span>
            <span className="currency">USD</span>
          </div>
        </div>
        <div className="box">
          <div className="outbox">
            <p>Epoch number</p>
          </div>
          <div className="inbox">
            <span className="price">20 000</span>
            <span className="currency">USD</span>
          </div>
        </div>
      </div>
      {/* end of box */}
      <h4>Compound CToKen pools</h4>
      <div className="wrapper">
        <div className="secondb">
          <div className="sbox">
            <div className="left">
              <h3 className="cardh apy">cETH</h3>
              <p className="apy">Supply APY</p>
              <p>Borrow APY</p>
            </div>
            <div className="right">
              <img src={A} alt="" />
              <p className="p">0.21%</p>
              <p className="plus">+0.01</p>
              <p>2.93%</p>
              <p className="plus">+0.03</p>
            </div>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <div className="sbox">
            <div className="left">
              <h3 className="cardh apy">cETH</h3>
              <p className="apy">Supply APY</p>
              <p>Borrow APY</p>
            </div>
            <div className="right">
              <img src={A} alt="" />
              <p className="p">0.21%</p>
              <p className="plus">+0.01</p>
              <p>2.93%</p>
              <p className="plus">+0.03</p>
            </div>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <div className="sbox">
            <div className="left">
              <h3 className="cardh apy">cETH</h3>
              <p className="apy">Supply APY</p>
              <p>Borrow APY</p>
            </div>
            <div className="right">
              <img src={A} alt="" />
              <p className="p">0.21%</p>
              <p className="plus">+0.01</p>
              <p>2.93%</p>
              <p className="plus">+0.03</p>
            </div>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <div className="sbox">
            <div className="left">
              <h3 className="cardh apy">cETH</h3>
              <p className="apy">Supply APY</p>
              <p>Borrow APY</p>
            </div>
            <div className="right">
              <img src={A} alt="" />
              <p className="p">0.21%</p>
              <p className="plus">+0.01</p>
              <p>2.93%</p>
              <p className="plus">+0.03</p>
            </div>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <div className="sbox">
            <div className="left">
              <h3 className="cardh apy">cETH</h3>
              <p className="apy">Supply APY</p>
              <p>Borrow APY</p>
            </div>
            <div className="right">
              <img src={A} alt="" />
              <p className="p">0.21%</p>
              <p className="plus">+0.01</p>
              <p>2.93%</p>
              <p className="plus">+0.03</p>
            </div>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
      </div>
      <h4>Uniswap UNIV2 pools</h4>
      <div className="wrapper">
        <div className="secondb">
          <p className="lheader">POWDER-ETH UNIV2</p>
          <div className="image">
            <span>
              <img src={A} alt="" />
            </span>
            <span>
              <img src={A} alt="" />
            </span>
          </div>
          <div className="ld">
            <div>
              <p>1 year</p>
              <p>fees/liquidity</p>
            </div>
            <span className="lp">0.21%</span>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <p className="lheader">POWDER-ETH UNIV2</p>
          <div className="image">
            <span>
              <img src={A} alt="" />
            </span>
            <span>
              <img src={A} alt="" />
            </span>
          </div>
          <div className="ld">
            <div>
              <p>1 year</p>
              <p>fees/liquidity</p>
            </div>
            <span className="lp">0.21%</span>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <p className="lheader">POWDER-ETH UNIV2</p>
          <div className="image">
            <span>
              <img src={A} alt="" />
            </span>
            <span>
              <img src={A} alt="" />
            </span>
          </div>
          <div className="ld">
            <div>
              <p>1 year</p>
              <p>fees/liquidity</p>
            </div>
            <span className="lp">0.21%</span>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>

        <div className="secondb">
          <p className="lheader">POWDER-ETH UNIV2</p>
          <div className="image">
            <span>
              <img src={A} alt="" />
            </span>
            <span>
              <img src={A} alt="" />
            </span>
          </div>
          <div className="ld">
            <div>
              <p>1 year</p>
              <p>fees/liquidity</p>
            </div>
            <span className="lp">0.21%</span>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
        <div className="secondb">
          <p className="lheader">POWDER-ETH UNIV2</p>
          <div className="image">
            <span>
              <img src={A} alt="" />
            </span>
            <span>
              <img src={A} alt="" />
            </span>
          </div>
          <div className="ld">
            <div>
              <p>1 year</p>
              <p>fees/liquidity</p>
            </div>
            <span className="lp">0.21%</span>
          </div>
          <div className="buttond">
            <button className="blueb">select Tranche</button>
            <button className="lightb">Get Tokenname</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
