import React from 'react';
import './submenu.css';
import { Link } from 'react-router-dom';

function SubMenuCompany(props) {
	return (
		<div className="nav_submenu">
			<div className="nav_submenu_item">
				<h5>Company</h5>
				<p>Digital manufacturing tools to better detect, analyze, and predict issues before they happen</p>
				<div>
					<p>Global Headquarters</p>
					<p>
						BISTel Tower, 128 Baumoe-ro, Seocho-gu,<br /> Seoul, Korea 06754<br /> Tel : 82 2 597 0911
					</p>
				</div>
			</div>
			<div className="nav_submenu_item2 grid_col_span2">
				<ul>
					<li>
						<Link to="/">About BISTel</Link>
						<p>회사소개글 / 비전, 신념 / Leadership</p>
					</li>
					<li>
						<Link to="/">Global Offices</Link>
						<p>우리는 세계 곳곳에 사무실이 있어. 너는 가장 가까운 곳에 연락해서 우리의 서비스를 받을 수 있어</p>
					</li>
					<li>
						<Link to="/">Career</Link>
						<p>Join the team with the skills and talent to make billions of lives better.</p>
					</li>
					<li className="nav_contact">
						<p className="contact_heading">Contact us</p>
						<p className="contact_subheading">
							Thank you for contacting BISTel. Please be as detailed as possible in the form below so that
							we can process your inquiry quickly and appropriately.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default SubMenuCompany;
