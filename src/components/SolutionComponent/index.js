import React from 'react';
import './solution.css';

function SolutionComponent(props) {
	return (
		<div>
			<header className="solutions__hero solutions__grid">
				<div className="solutions__banner-header">
					<p className="solution">{props.solHeading}</p>
					<p className="sol_heading">
						{props.solsubHeading1}
						<br />
						{props.solsubHeading2}
					</p>
					<div className="sol_img_section">
						<img src={props.solImg1} alt="" className="sol_img10" />
						<img src={props.solImg2} alt="" className="sol_img11" />
						<img src={props.solImg3} alt="" className="sol_img1" />
						<img src={props.solImg4} alt="" className="sol_img4" />
						<img src={props.solImg5} alt="" className="sol_img2" />
					</div>
				</div>
				<div className="solutions__card">
					<p className="solutions__card-title">{props.solTitle}</p>
					<p className="solutions__card-content">{props.solPara}</p>
					<p className="solutions__card-title">{props.solCardHeading}</p>
					<p className="solutions__card-content" style={{ marginBottom: 50 }}>
						{props.solCardContent}
					</p>
				</div>
			</header>
		</div>
	);
}
export default SolutionComponent;
