import React from 'react';
// import './submenu.css';
import { Link } from 'react-router-dom';

function SubMenuSolution(props) {
	return (
		<div className="nav_submenu nav_submenuCol">
			<div className="nav_submenu_item">
				<h5>Solutions Overview</h5>
				<p>Market Leading Award Winning Real-Time Fault</p>
			</div>
			<div className="nav_submenu_item2">
				<ul>
					<li>
						<Link to="/solutions/detect">Detect</Link>
						<p>Market Leading, Award Winning Real-Time Fault</p>
					</li>
					<li>
						<Link to="/solutions/analyzer">Analyze</Link>
						<p>Industry Leading ANALYTICS Keep Everything</p>
					</li>
					<li>
						<Link to="/solutions/predict">Predict</Link>
						<p>
							AI Based PREDICTIVE ANALYTICS and PREDICTIVE MAINTENANCE Make Downtime a Thing of the Past
						</p>
					</li>
				</ul>
			</div>
			<div className="nav_submenu_item3">
				<ul>
					<li>
						<Link to="/solutions/DFD">DFD</Link>
						<p>Dynamic Fault Detection</p>
					</li>
					<li>
						<Link to="/solutions/datalyzer">eDataLyzer</Link>
						<p>Advanced Data Analytics</p>
					</li>
					<li>
						<Link to="/solutions/CM">CM</Link>
						<p>Chamber Matching</p>
					</li>
				</ul>
			</div>
			<div className="nav_submenu_item4">
				<ul>
					<li>
						<Link to="/solutions/EES">EES</Link>
						<p>Equipment Engineering System</p>
					</li>
					<li>
						<Link to="/solutions/WQP">WQP</Link>
						<p>Wafer Quality Predictor</p>
					</li>
					<li>
						<Link to="/solutions/HMP">HMP</Link>
						<p>Health Monitoring and Prediction</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default SubMenuSolution;
