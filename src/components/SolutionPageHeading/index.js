import React from 'react';
import './solutionpageheading.css';

function SolutionPageHeading(props) {
	return (
		<div className="page_heading_container">
			<h4 className="sol_road_heading4 page_heading_text">{props.pageHeading}</h4>
			<h1 className="solutions__main-card-title">{props.pageTitle}</h1>
			<h4 className="solutions__main-card-subtitle">{props.pageContent}</h4>
		</div>
	);
}
export default SolutionPageHeading;
