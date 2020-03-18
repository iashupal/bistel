import React from 'react';
import './description.css';
function GraphDescription(props) {
	return (
		<div className="graph_container">
			<div>
				<p className="solutions__main-card-title graph_heading">{props.graphHeading}</p>
				<p className="solutions__main-card-content">{props.graphContent}</p>
			</div>
			<div className="graph_img">
				<img src={props.graphImg} alt="props.graphName" />
			</div>
		</div>
	);
}
export default GraphDescription;
