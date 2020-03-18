import React from 'react';

import './brochure.css';

function Brochure(props) {
	return (
		<div className="brochure_card">
			<div className="brochure_img">
				<img src={props.brochureImg} alt="Brochure" />
			</div>
			<div className="brochure_content">
				<p className="brochure_heading">{props.brochureHeading}</p>
				<p className="solutions__main-card-title brochure_subHeading">{props.brouchureTitle}</p>
				<p className="solutions__main-card-content brochure_content">{props.brochureContent}</p>
				<button className="solutions__button brochure_button">{props.buttonText}</button>
			</div>
		</div>
	);
}
export default Brochure;
