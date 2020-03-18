import React, { Fragment } from 'react';
import './solutions.css';
import sol_img1 from '../../assets/images/solutions/sol_img1.png';
import sol_img2 from '../../assets/images/solutions/sol_img2.png';
import sol_img4 from '../../assets/images/solutions/sol_img4.png';
import sol_img10 from '../../assets/images/solutions/sol_img10.png';
import sol_img11 from '../../assets/images/solutions/sol_img11.png';
import sol_img16 from '../../assets/images/solutions/sol_img16.png';
import sol_img17 from '../../assets/images/solutions/sol_img17.png';
import sol_img18 from '../../assets/images/solutions/sol_img18.png';
import sol_img19 from '../../assets/images/solutions/sol_img19.png';
import sol_img20 from '../../assets/images/solutions/sol_img20.png';
import sol_img9 from '../../assets/images/solutions/sol_img9.png';
import sol_img8 from '../../assets/images/solutions/sol_img8.png';
import sol_img7 from '../../assets/images/solutions/sol_img7.png';
import SolutionComponent from '../../components/SolutionComponent';

function SolutionsContainer(props) {
	return (
		<Fragment>
			<SolutionComponent
				solHeading="Solutions"
				solsubHeading1="We Detect"
				solsubHeading2="Analyze and Predict"
				solImg1={sol_img10}
				solImg2={sol_img11}
				solImg3={sol_img1}
				solImg4={sol_img4}
				solImg5={sol_img2}
				solTitle="Start the Journey to Industry 4.0"
				solPara="It’s a journey that begins by enabling smarter machines by embedding human knowledge and
        integrating intelligence into equipment and processes. From there we integrate Intelligence into
        engineering systems then across the entire enterprise."
				solCardHeading="Adaptive Intelligence for Smarter Manufacturing"
				solCardContent="At BISTel, we have made improving manufacturing effectiveness our domain expertise. We transform
        factory data into actionable intelligence that mitigates risk in manufacturing by guarding
        against events that harm yield, impact engineering productivity and quality. Today, BISTel has
        grown to become a leading provider of equipment engineering and automation solutions. We have
        helped our customers achieve excellence in manufacturing by providing their engineers with the
        tools they need to maximize engineering productivity, improve quality and reduce costs. BISTel’s
        Equipment Engineering System (EES) is the semiconductor manufacturing industry’s premier EES
        solution featuring a broad range of applications that gather data from any source, quickly
        detect and classify faults, and guard against issues that impact yield. Our world-className advanced
        analytics solution, eDataLyzer, is helping engineers to quickly perform root cause analysis,
        identifying the issues that impact yield in hours versus the weeks that it takes others."
			/>
			<main>
				<section className="solutions__container solutions__grid">
					<div className="solutions__banner-header">
						<p className="solution">Solutions</p>
						<p className="sol_heading">
							We Detect
							<br />
							Analyze and Predict
						</p>
						<div className="sol_img_section">
							<img src={sol_img16} alt="Prediction" className="sol_img10" />
							<img src={sol_img20} alt="Prediction" className="sol_img11" />
							<img src={sol_img1} alt="Prediction" className="sol_img1" />
							<img src={sol_img19} alt="Prediction" className="sol_img4" />
							<img src={sol_img18} alt="Prediction" className="sol_img2" />
						</div>
					</div>
					<div className="solutions__main-card">
						<p className="solutions__main-card-title">Detect</p>
						<p className="solutions__main-card-subtitle">
							Market Leading, Award Winning Real Time Fault Detection
						</p>
						<p className="solutions__main-card-content">
							Market leading, real-time fault detection helps manufacturers monitor the performance of
							their equipment and process around the clock to ensure optimal performance and guard against
							equipment failures, glitches and other variations in performance. As a result, BISTel’s
							detection solutions lowers risk, offering manufacturers the only real-time monitoring and
							detection of full sensor trace data on the market. This means customers can quickly detect
							yield impacting events by monitoring 100 percent of the data, 100 percent of the time.
						</p>
						<div className="solutions__sub-card-grid">
							<div className="col-md-6">
								<p className="solutions__sub-card-title">DFD</p>
								<p className="solutions__sub-card-subtitle">
									Next generation FDC solution using trace analytics
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
							<div className="col-md-6">
								<p className="solutions__sub-card-title">EES</p>
								<p className="solutions__sub-card-subtitle">
									Comprehensive solution suite for monitoring, maintaining and optimizing your
									equipment
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
						</div>
					</div>
				</section>

				<section className="solutions__container solutions__grid">
					<div className="solutions__banner-header">
						<p className="solution">Solutions</p>
						<p className="sol_heading">
							We Detect
							<br />
							Analyze and Predict
						</p>
						<div className="sol_img_section">
							<img src={sol_img16} alt="Prediction" className="sol_img10" />
							<img src={sol_img11} alt="Prediction" className="sol_img11" />
							<img src={sol_img17} alt="Prediction" className="sol_img1" />
							<img src={sol_img4} alt="Prediction" className="sol_img4" />
							<img src={sol_img18} alt="Prediction" className="sol_img2 sol_img19" />
						</div>
					</div>
					<div className="solutions__main-card">
						<p className="solutions__main-card-title">Analyze</p>
						<p className="solutions__main-card-subtitle">
							Industry Leading ANALYTICS Keep Everything Under Control
						</p>
						<p className="solutions__main-card-content">
							BISTel’s A.I. solutions are helping to drive Industry 4.0, shaping the factory of the future
							through the proliferation of IIoT, and by leveraging cloud computing, and big data storage
							architectures. By combing these building blocks with BISTel’ s industry leading fault
							detection, data analysis tools, and AI based applications customers can connect their
							manufacturing ecosystem to better detect, analyze, and predict real-time to changing
							manufacturing conditions.
						</p>
						<div className="solutions__sub-card-grid">
							<div className="col-md-6">
								<p className="solutions__sub-card-title">eDataLyzer</p>
								<p className="solutions__sub-card-subtitle">
									Data analytic platform designed for advanced root cause analysis
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
							<div className="col-md-6">
								<p className="solutions__sub-card-title">CM</p>
								<p className="solutions__sub-card-subtitle">
									Intelligent solution for Chamber performance comparison
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
						</div>
					</div>
				</section>

				<section className="solutions__container solutions__grid">
					<div className="solutions__banner-header">
						<p className="solution">Solutions</p>
						<p className="sol_heading">
							We Detect
							<br />
							Analyze and Predict
						</p>
						<div className="sol_img_section">
							<img src={sol_img16} alt="Prediction" className="sol_img10" />
							<img src={sol_img11} alt="Prediction" className="sol_img11" />
							<img src={sol_img17} alt="Prediction" className="sol_img1" />
							<img src={sol_img19} alt="Prediction" className="sol_img4" />
							<img src={sol_img2} alt="Prediction" className="sol_img2" />
						</div>
					</div>
					<div className="solutions__main-card">
						<p className="solutions__main-card-title">Predict</p>
						<p className="solutions__main-card-subtitle">
							AI Based PREDICTIVE ANALYTICS and PREDICTIVE MAINTAINENCE Make Downtime a Thing of the Past
						</p>
						<p className="solutions__main-card-content">
							Ensuring a seamless, fault-free production environment is the highest priority for
							industrial manufactures everywhere. BISTel’s new AI based prediction solutions provide real
							time monitoring, and fault detection of key equipment and components that predict failures
							before that happen. BISTel PREDICT solutions lets producers moved to a condition-based
							servicing program. With BISTel predict, equipment servicing is done when needed not when
							scheduled. This requires continuous, and automated analysis of relevant data to enable you
							to detect potential damage, plan maintenance, and eliminate faults before they happen. This
							reduces downtime and optimizes plant maintenance activities.
						</p>
						<div className="solutions__sub-card-grid">
							<div className="col-md-6">
								<p className="solutions__sub-card-title">HMP</p>
								<p className="solutions__sub-card-subtitle">
									Equipment failure warning and Remaining Useful Life(RUL) prediction system
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
							<div className="col-md-6">
								<p className="solutions__sub-card-title">WQP</p>
								<p className="solutions__sub-card-subtitle">
									Fab-wide wafer quality assessment and reporting solution
								</p>
								<button className="solutions__button">Learn More</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<section className="solutions_road_container">
				<div>
					<h4 className="sol_road_heading4">The Road to Industry 4.0</h4>
					<h1 className="solutions__main-card-title">
						The road to industry 4.0 will not be attached overnight
					</h1>
					<p className="solutions__main-card-content">
						It’s a journey that begins by enabling smarter machines by embedding human knowledge and
						integrating intelligence into equipment and processes. From there we integrate Intelligence into
						engineering systems then across the entire enterprise.
					</p>
					<h4 className="solutions__main-card-subtitle">The Smart manufacturing journey starts here with</h4>
					<p className="solutions__main-card-content">
						It is a three-year vision that begins for BISTel with the release of new adaptive intelligent
						applications that help engineers to better manage, and analyze data, monitor the health of their
						machines and equipment real-time, optimize process flows, and identify root cause quicker than
						ever before.
					</p>
				</div>
			</section>
			<section className="sol_road_img_sectn solutions__grid">
				<div>
					<img src={sol_img9} alt="Artificial Intelligence" />
				</div>
				<div className="sol_road_img_info">
					<p className="solutions__card-title">Smart Application</p>
					<p className="solutions__card-content">
						Application specific solutions using artificial intelligence to support, analyze and optimize
						various aspects of the operation lifecycle
					</p>
				</div>
			</section>
			<section className="sol_road_img_sectn solutions__grid">
				<div>
					<img src={sol_img7} alt="Smart System" />
				</div>
				<div className="sol_road_img_info">
					<p className="solutions__card-title">Smart System</p>
					<p className="solutions__card-content">
						Smart Applications combined with knowledge-Base, to allow collaboration and autonomous decision
						making within a manufacturing system.
					</p>
				</div>
			</section>
			<section className="sol_road_img_sectn solutions__grid">
				<div>
					<img src={sol_img8} alt="Smart Enterprise" />
				</div>
				<div className="sol_road_img_info">
					<p className="solutions__card-title">Smart Enterprise</p>
					<p className="solutions__card-content">
						Expanded intelligence to allow autonomous inter-system decision making and recommendations
						throughout the enterprise
					</p>
				</div>
			</section>
			<section className="solutions_road_container">
				<div>
					<p className="solutions__main-card-content">
						BISTel offers a comprehensive range of detection, data analysis and predictive analytics
						solutions that connect and optimize all factory data to ensure that plant operate at the their
						most efficient and that yield, and engineering productivity is the best it can be.
					</p>
					<h4 className="solutions__main-card-subtitle">
						BISTel provide customers with the winning formula for their journey to smart manufacturing and
						industry 4.0.
					</h4>
				</div>
			</section>
		</Fragment>
	);
}

export default SolutionsContainer;
