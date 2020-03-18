import React from 'react';
import './subscribe.css';

function Subscribe(props) {
	return (
		<section className="subscription__container">
			<div className="subscription__heading">Talk with an Expert</div>
			<p className="subscription__subheading">Learn more about how BISTel solutions can improve your business.</p>
			<button type="button" className="subscription__request-demo">
				Request Demo
			</button>
		</section>
	);
}

export default Subscribe;
