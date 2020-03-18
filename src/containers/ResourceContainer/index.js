import React, { Fragment } from 'react';
import resource_img1 from '../../assets/images/resources/resource_img1.png';
import { Link } from 'react-router-dom';
import './resource.css';

function ResourceContainer(props) {
	return (
		<Fragment>
			<header>
				<div className="industry__hero resource__hero">
					<div className="resource__hero-title">Resources</div>
					<div className="industry__hero-content">
						<ul className="resource_views">
							<li>
								<p className="resource_num">34</p>
								<p className="resource_data">All</p>
							</li>
							<li>
								<p className="resource_num">26</p>
								<p className="resource_data">#Brochure</p>
							</li>
							<li>
								<p className="resource_num">5</p>
								<p className="resource_data">#Case Study</p>
							</li>
							<li>
								<p className="resource_num">2</p>
								<p className="resource_data">#Videos</p>
							</li>
							<li>
								<p className="resource_num">1</p>
								<p className="resource_data">#BISTel CI</p>
							</li>
							<li>
								<p className="resource_num">0</p>
								<p className="resource_data">Etc</p>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<main>
				<section className="main__container">
					<div className="main__column">
						<p className="filter">filter : Category</p>
						<div className="resource_category">
							<ul className="resource_category_content">
								<li>
									<p>All</p>
								</li>
								<li>
									<p>Brochure</p>
								</li>
								<li>
									<p>Case Study</p>
								</li>
								<li>
									<p>Video</p>
								</li>
								<li>
									<p>BISTel CI</p>
								</li>
								<li>
									<i className="fa fa-list" aria-hidden="true" />
								</li>
							</ul>
						</div>
						<div className="resource_language">
							<p className="filter">filter : Language</p>
							<div className="resource_language">
								<ul className="resource_language_content">
									<li>#All</li>
									<li>#English</li>
									<li>#Chinese</li>
									<li>#Korean</li>
									<li>#Japnese</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="resource_container">
						<div className="resource_inr_content">
							<p className="resource_logo_heading"># BISTel Logo</p>
							<p className="resource_bistel_heading">BISTel Logo (CI)</p>
							<ul className="resource_file">
								<li>
									<Link to="">- Ai file</Link>
								</li>
								<li>
									<Link to="">- Png File</Link>
								</li>
								<li>
									<Link to="">- Jpg File</Link>
								</li>
							</ul>
							<div>
								<img src={resource_img1} alt="BISTel" />
							</div>
						</div>
						<div className="resource_inr_content resource_content_height">
							<ul className="resource_case">
								<li>#Case Study</li>
								<li>#CM</li>
							</ul>
							<ul className="resource_case">
								<li>#English</li>
								<li>#Chinese</li>
								<li>#Korean</li>
								<li>#Japnese</li>
							</ul>
							<p className="resource_bistel_heading">
								Chamber Matching Solves Vacuum Chamber Yield Issues at Top Wafer Manufacturer
							</p>
						</div>
						<div className="resource_inr_content resource_content_height">
							<ul className="resource_case">
								<li>#Case Study</li>
								<li>#CM</li>
							</ul>
							<ul className="resource_case">
								<li>#English</li>
								<li>#Chinese</li>
								<li>#Korean</li>
								<li>#Japnese</li>
							</ul>
							<p className="resource_bistel_heading" style={{ margin: 0 }}>
								eDataLyzer <br />-Advanced Analyzer
							</p>
						</div>
						<div className="resource_inr_content grid_row2">
							<p className="resource_logo_heading"># Webinar</p>
							<p className="resource_bistel_heading">
								[2019.04.13] Chamber Matching Solves Vacuum Chamber Yield Issues at Top Wafer
								Manufacturer
							</p>
						</div>
						<div className="resource_inr_content resource_content_height">
							<ul className="resource_case">
								<li>#Case Study</li>
								<li>#CM</li>
							</ul>
							<p className="resource_bistel_heading">
								Chamber Matching Solves Vacuum Chamber Yield Issues at Top Wafer Manufacturer
							</p>
						</div>
						<div className="resource_inr_content resource_content_height">
							<ul className="resource_case">
								<li>#Case Study</li>
								<li>#CM</li>
							</ul>
							<p className="resource_bistel_heading">CM</p>
						</div>
						<div className="resource_inr_content resource_content_height">
							<ul className="resource_case">
								<li>#Case Study</li>
								<li>#CM</li>
							</ul>
							<p className="resource_bistel_heading" style={{ margin: 0 }}>
								eDataLyzer <br />-Advanced Analyzer
							</p>
						</div>
					</div>
					<div className="more_content">
						<p className="resource_logo_heading more_btn">more</p>
					</div>
				</section>
			</main>
		</Fragment>
	);
}
export default ResourceContainer;
