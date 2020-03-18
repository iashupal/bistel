import React, { Fragment } from 'react';
import './solution.css';

function IndustrySolution(props) {
	return (
		<Fragment>
			<div className="solution_column">
				<img src={props.img} alt="DFD" />
				<h2>{props.heading}</h2>
				<p>{props.para}</p>
				<button className="btnStyle">{props.buttonText}</button>
			</div>
		</Fragment>
	);
}
export default IndustrySolution;
