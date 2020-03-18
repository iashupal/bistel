import React from 'react';
import './solheader.css';

function SolutionHeader(props) {
	return (
		<div>
			<header className="solutions__hero detect_hero">
				<div className="solutions__banner-header sol_bnr_header">
					<div>
						<div className="industry__hero-title solution_hero_title">{props.title}</div>
						<div className="industry__hero-content solution_hero_subheading">{props.pageTitle}</div>
						<p className="solution_hero_content">{props.content}</p>
						<ul className={`solution_detect_images ${props.imgClassName}_images`}>
							<li>
								<img src={props.solImg1} alt="Product" />
								<p>{props.solInfo1}</p>
							</li>
							<li>
								<img src={props.solImg2} alt="Product" />
								<p>{props.solInfo2}</p>
							</li>
							<li>
								<img src={props.solImg3} alt="Product" />
								<p>{props.solInfo3}</p>
							</li>
							<li>
								<img src={props.solImg4} alt="Product" />
								<p>{props.solInfo4}</p>
							</li>
						</ul>
					</div>
					<div className="sol_screen_img">
						<img src={props.screenImg} alt="Screen" />
					</div>
				</div>
			</header>
		</div>
	);
}
export default SolutionHeader;
