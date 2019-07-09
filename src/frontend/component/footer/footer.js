import React from 'react';
import NearLogo from './nearLogo/nearLogo';
import './footer.css';

const Footer = () => (
    <div className="footer">
        <div className="left">
            <NearLogo />
            <div className="text">
                <p>Crypto Corgis was created to demonstrate the NFT</p>
                <p>capabilities of NEAR Protocol. </p>
                <p>Learn more at
                    <a
                        href="https://nearprotocol.com/"
                        target="_blank"
                        className="blue" >nearprotcol.com</a></p>
            </div>
        </div>
        <div className="right">
            <p>© 2019 Near Protocol  </p>
            <p>All Rights Reserved.</p>
            <p className="blue">Privacy Policy  <span className="black"> | </span>  Terms of Use</p>
        </div>

    </div>
)

export default Footer