import React from 'react';
import './overview.css';

function SolutionOverview(props) {
	return (
		<div>
			<header className="solutions__hero detect_hero">
				<div className="solutions__banner-header">
					<p className="solution_hero_text solution_hero_title_info">{props.titleInfo}</p>
					<p className="solution_hero_text sol_hero_title">{props.title}</p>
				</div>
			</header>
			<main>
				<div className="detect-container">
					<section className="semicon_middle_section main__container">
						<div className="detect_defense_container">
							<div className="line" />
							<p className="main__intro-heading">{props.heading}</p>
							<p className="main__intro-subheading">{props.subHeading}</p>
							<p className="main__intro-content">{props.content1}</p>
							<p className="main__intro-content">{props.content2}</p>
						</div>
						<div className="detect_right_image">
							<img src={props.img} alt={props.alternate} />
						</div>
					</section>
					<section className="detect_challanges">
						<h4 className="sol_road_heading4 detect_challange_heading">{props.challangeHeading}</h4>
						<p className="solutions__sub-card-subtitle detect_card_subtitle">
							{props.challangeHeadingText1}
						</p>
						<p className="solutions__sub-card-subtitle detect_card_subtitle1">
							{props.challangeHeadingText2}
						</p>
						<p className="solutions__sub-card-subtitle detect_card_subtitle">
							{props.challangeHeadingText3}
						</p>
						<p className="solutions__sub-card-subtitle detect_card_subtitle1">
							{props.challangeHeadingText4}
						</p>
					</section>
					<section className="detect_solutions">
						<h4 className="sol_road_heading4 detect_solution_heading">{props.solHeading}</h4>
						<p className="solutions__card-title">{props.solsubHeading}</p>
						<div className="solutions__sub-card-grid">
							<div className="col-md-6">
								<p className="solutions__sub-card-title">{props.cardTitle1}</p>
								<p className="solutions__sub-card-subtitle">{props.cardsubTitle1}</p>
								<button className="solutions__button">{props.buttonText}</button>
							</div>
							<div className="col-md-6">
								<p className="solutions__sub-card-title">{props.cardTitle2}</p>
								<p className="solutions__sub-card-subtitle">{props.cardsubTitle2}</p>
								<button className="solutions__button">Learn More</button>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
export default SolutionOverview;
