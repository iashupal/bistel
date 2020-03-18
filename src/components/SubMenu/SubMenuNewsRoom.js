import React from 'react';
import './submenu.css';
import { Link } from 'react-router-dom';

function SubMenuNewsRoom(props) {
	return (
		<div className="nav_submenu">
			<div className="nav_submenu_item">
				<h5>Newsroom</h5>
				<p>Digital manufacturing tools to better detect, analyze, and predict issues before they happen</p>
			</div>
			<div className="nav_submenu_item2">
				<ul>
					<li>
						<Link to="/">Press Release</Link>
						<p>Get the latest news on bistel and our product and services</p>
					</li>
					<li>
						<Link to="/">BISTel News</Link>
						<p>비스텔이 전하는 소식</p>
					</li>
					<li>
						<Link to="/">Event</Link>
						<p>Visit BISTel at tradeshows, seminars, workshops, webinar and technical symposia.</p>
					</li>
					<li>
						<Link to="/">The Wire</Link>
						<p>News letter of BIstel, and Subscribe</p>
					</li>
				</ul>
			</div>
			<div className="nav_submenu_item3 format_signup">
				<div className="">
					<p className="format_signup_heading">Stay Tuned To What’s Happening at BISTel</p>
					<p className="format_signup_content">
						We have lots of wonderful stories to show you, and look forward to sharing them with you. Check
						back for the latest timely information and interesting topics throughout the year.
					</p>
					<button className="signup_btn">
						<Link to="/">Sign Up</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
export default SubMenuNewsRoom;
