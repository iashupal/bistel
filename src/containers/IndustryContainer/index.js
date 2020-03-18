import React, { Fragment } from 'react';
import './industries.css';

function IndustryContainer(props) {
	return (
		<Fragment>
			<header>
				<div className="industry__hero">
					<div className="industry__hero-title">All Industries</div>
					<div className="industry__hero-content">
						Turning Data <br /> to Actionable Intelligence
					</div>
				</div>
			</header>
			<main>
				<section class="main__container">
					<div class="main__column">
						<div class="line" />
						<p class="main__intro-heading">How intelligent is your factory?</p>
						<br />
						<p class="main__intro-subheading">
							Boost factory performance with BISTel’s Industry 4.0 ready solutions to create real-time,
							actionable data that prevents problems, improve quality, and eliminate equipment downtime.
						</p>
						<br />
						<p class="main__intro-content">
							Intelligent manufacturing uses the latest A.I. smart applications to allow your equipment,
							processes and engineers to detect, analyze and predict problems in real-time, creating huge
							efficiencies that transform the manufacturing ecosystem beyond the factory walls.
						</p>
					</div>
				</section>
				<section class="main__container">
					<div class="main__column">
						<div class="line" />
						<p class="main__intro-heading">
							Industry 4.0 Intelligence Powers Wave of Productivity in Global Manufacturing
						</p>
						<p class="main__intro-subheading">
							BISTel industry 4.0 solutions are transforming semiconductor, flat panel display, LED,
							automotive, pharmaceutical and steel manufacturing industries. The proliferation of IIoT and
							the advent of AI is transforming our factories, untapping a wealth of data that has the
							power optimize plant operations, taking engineering productivity, quality and yields to new
							heights.
						</p>
						<p class="main__intro-content">
							The latest smart manufacturing applications allow manufacturers to monitor and analyze
							factory data 24/7. IoT, A.I. enabled solutions optimize process control for higher yields.
							Improve equipment performance by detecting and predicting potential equipment issues that
							disrupt production flow. The latest predictive analytics identify problems before they
							happen, prescribing solutions to optimize maintenance schedules, increase equipment
							utilization, preventing downtime, and substantially manufacturing productivity.
						</p>
					</div>
				</section>
				<section class="main__container section__two-bg">
					<div style={{ textAlign: 'center' }}>
						<div class="industry__heading">What's new at BISTel</div>
					</div>
					<div class="main__grid">
						<div class=" main__card main__card-1-img">
							<span class="main__card-text">Semiconductor & Electronics</span>
						</div>
						<div class=" main__card main__card-2-img">
							<span class="main__card-text">
								Flat <br /> Panel <br /> Display
							</span>
						</div>
						<div class=" main__card main__card-3-img">
							<span class="main__card-text">Automotive</span>
						</div>
						<div class=" main__card main__card-4-img">
							<span class="main__card-text">Steel</span>
						</div>
						<div class=" main__card main__card-5-img">
							<span class="main__card-text">Energy</span>
						</div>
						<div class=" main__card main__card-6-img">
							<span class="main__card-text">Rechargeable Battery</span>
						</div>
						<div class=" main__card main__card-7-img">
							<span class="main__card-text">
								Electronics <br /> Assembly <br /> & PCB
							</span>
						</div>
						<div class=" main__card main__card-8-img">
							<span class="main__card-text">LED</span>
						</div>
						<div class=" main__card main__card-9-img">
							<span class="main__card-text">Pharmaceutical</span>
						</div>
					</div>
				</section>
			</main>
		</Fragment>
	);
}

export default IndustryContainer;
