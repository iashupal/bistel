import React from 'react';
import './submenu.css';
import { Link } from 'react-router-dom';

function SubMenuResource(props) {
	return (
		<div className="nav_submenu">
			<div className="nav_submenu_item">
				<h5>All Resources</h5>
				<p>Digital manufacturing tools to better detect, analyze, and predict issues before they happen</p>
				<div className="nav_file_format">
					<p className="format_heading">BISTel CI</p>
					<p>Download it for Free. AI, PNG, PDF, JPG Format..</p>
					<button className="solutions__button brochure_button">Download</button>
				</div>
			</div>
			<div className="nav_submenu_item2">
				<ul>
					<li className="format_li">
						<Link to="/"># Brochure</Link>
						<p>Text~제품별 안내 자료임</p>
					</li>
					<li className="format_li">
						<Link to="/"># Case Study</Link>
						<p>우리의 제품은 다양한 산업분야에 실제로 적용되고 있습니다.</p>
					</li>
					<li className="format_li">
						<Link to="/"># Video</Link>
						<p>Webinna 다시보기 / Youtube 홍보자료 보기</p>
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
export default SubMenuResource;
