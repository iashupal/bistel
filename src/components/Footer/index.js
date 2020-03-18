import React, { Fragment } from 'react';
import './footer.css';

function Footer(props) {
	return (
		<Fragment>
			<footer className="footer__container">
				<div className="footer__grid">
					<div className="footer__column">
						<h5 className="footer__heading">Industries</h5>
						<div className="footer__link">All Industries</div>
						<div className="footer__link">Semiconductors and Electronic Manufacturing</div>
						<div className="footer__link">Flat Panel Display</div>
						<div className="footer__link">Automotive</div>
						<div className="footer__link">Energy</div>
						<div className="footer__link">Steel</div>
						<div className="footer__link">LED</div>
						<div className="footer__link">Rechargeable Battery</div>
						<div className="footer__link">Electronic Assembly</div>
						<div className="footer__link">Pharmeceutical</div>
					</div>
					<div className="footer__column">
						<h5 className="footer__heading">Solutions</h5>
						<div className="footer__link">Solutions Overview</div>
						<div className="footer__link">Detect</div>
						<div className="footer__link">Analyze</div>
						<div className="footer__link">Predict</div>
						<div className="footer__link">DFD</div>
						<div className="footer__link">EES</div>
						<div className="footer__link">eDataLyzer</div>
						<div className="footer__link">CM</div>
						<div className="footer__link">HMP</div>
						<div className="footer__link">WQP</div>
					</div>
					<div className="footer__column">
						<h5 className="footer__heading">Resources</h5>
						<div className="footer__link">All Resources</div>
						<h5 className="footer__heading">NewsRoom</h5>
						<div className="footer__link">NewsRoom Overview</div>
						<div className="footer__link">Press Release</div>
						<div className="footer__link">BISTel News</div>
						<div className="footer__link">Event</div>
					</div>
					<div className="footer__column">
						<h5 className="footer__heading">Company</h5>
						<div className="footer__link">About BISTel</div>
						<div className="footer__link">Global Offices</div>
						<div className="footer__link">Career</div>
						<div className="footer__link">Contact Us</div>
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
					<div className="footer__column">
						<h5 className="footer__heading">Select a Language</h5>
						<div className="footer__link">English</div>
						<div className="footer__link">Korean</div>
						<div className="footer__link">Chinese</div>
						<div className="footer__link">Japanese</div>
						<p className="footer__subscribe">Sign me up now</p>
						<input className="footer__email-input" type="text" placeholder="Your Email Here" />
						<button type="button" className="footer__subscribe-btn">
							Subscribe
						</button>
					</div>
				</div>
			</footer>
			<div className="footer__privacy-container">
				<p className="footer__privacy-text">
					Copyright © 2000-2019 BISTel,Inc. &nbsp;&nbsp; All rights reserved. &nbsp;&nbsp; Privacy Notice |
					Subscription center
				</p>
			</div>
		</Fragment>
	);
}

export default Footer;
