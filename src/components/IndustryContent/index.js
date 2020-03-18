import React from 'react';
import './industrycontent.css';

function Industrycontent(props) {
	return (
		<div>
			<header>
				<div className={`industry__hero ${props.imgClassName}_hero`}>
					<div className="industry__hero-title">{props.title}</div>
					<div className="industry__hero-content">{props.pageName}</div>
				</div>
			</header>
			<main>
				<section className="semicon_heading__container">
					<div className="semicon__column">
						<div className="icon_Q">Q</div>
						<p class="main__intro-heading semiconductor_heading">{props.pageQuestion}</p>
					</div>
				</section>
				<div className="semicon-container">
					<section class="semicon_middle_section main__container">
						<div class="semicon_yield_container">
							<div class="line" />
							<p class="main__intro-heading">{props.heading}</p>
							<p class="main__intro-subheading">{props.subheading}</p>
							<p class="main__intro-content">{props.content}</p>
						</div>
						<div className="semicon_optimizatn_image">
							<img src={props.img} alt={props.alternate} />
						</div>
					</section>
				</div>
				<section class="main__container">
					<div class="semicon_yield_container">
						<div class="line" />
						<p class="main__intro-heading">{props.sectionHeading}</p>
						<p class="semicon-subheading">{props.sectionsubHeading}</p>
						<p class="main__intro-content">{props.sectionContent}</p>
					</div>
				</section>
			</main>
		</div>
	);
}
export default Industrycontent;
