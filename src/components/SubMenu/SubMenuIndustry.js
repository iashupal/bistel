import React from 'react';
import './submenu.css';
import { Link } from 'react-router-dom';

function SubMenuIndustry(props) {
	return (
		<div className="nav_submenu">
			<div className="nav_submenu_item">
				<h5>All Industries</h5>
				<p>Digital manufacturing tools to better detect, analyze, and predict issues before they happen</p>
			</div>
			<div className="nav_submenu_item2">
				<ul>
					<li>
						<Link to="/industries/semiconductor-electronics">Semiconductor & Electronics</Link>
						<p>
							Digital manufacturing tools to better detect, analyze, and predict issues before they happen
						</p>
					</li>
					<li>
						<Link to="/industries/flat-panel">Flat Panel Display</Link>
						<p>
							BISTel helps flat panel display manufacturers maximize their competitiveness and
							profitability
						</p>
					</li>
					<li>
						<Link to="/industries/automotive">Automotive</Link>
						<p>improving engineering productivity while cutting maintenance costs</p>
					</li>
					<li>
						<Link to="/industries/steel">Steel</Link>
						<p>Transforms steel plant operations to improve quality, reduces costs</p>
					</li>
					<li>
						<Link to="/industries/energy">Energy</Link>
						<p>Transforms steel plant operations to improve quality, reduces costs</p>
					</li>
				</ul>
			</div>
			<div className="nav_submenu_item3">
				<ul>
					<li>
						<Link to="/industries/rechargable-battery">Rechargable Battery</Link>
						<p>
							Digital manufacturing tools to better detect, analyze, and predict issues before they happen
						</p>
					</li>
					<li>
						<Link to="/industries/electronice-assemble-PCB">Electronics Assembly & PCB</Link>
						<p>
							BISTel helps flat panel display manufacturers maximize their competitiveness and
							profitability
						</p>
					</li>
					<li>
						<Link to="/industries/led">LED</Link>
						<p>Improving engineering productivity while cutting maintenance costs</p>
					</li>
					<li>
						<Link to="/industries/pharmaceutical">Pharmaceutical</Link>
						<p>Transforms steel plant operations to improve quality, reduces costs</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default SubMenuIndustry;
