import React, { Fragment } from 'react';
import SolutionHeader from '../../components/SolutionsHeader';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import sol_img78 from '../../assets/images/solutions/sol_img78.png';
import sol_img79 from '../../assets/images/solutions/sol_img79.png';
import sol_img80 from '../../assets/images/solutions/sol_img80.png';
import sol_img81 from '../../assets/images/solutions/sol_img81.png';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import sol_img83 from '../../assets/images/solutions/sol_img83.png';
import sol_img84 from '../../assets/images/solutions/sol_img84.png';
import sol_img85 from '../../assets/images/solutions/sol_img85.png';
import sol_img86 from '../../assets/images/solutions/sol_img86.png';
import sol_img88 from '../../assets/images/solutions/sol_img88.png';
import Brochure from '../../components/Brochure';
import './wqp.css';

function WQPContainer(props) {
	return (
		<Fragment>
			<SolutionHeader
				title="Solutions"
				imgClassName="allSolution"
				pageTitle="Wafer Quality Predictor (WQP)"
				content="Intelligent Plant-wide Product Quality Dashboard"
				solImg1={sol_img79}
				solInfo1="Every wafer with trace sensor data is assessed"
				solImg2={sol_img80}
				solInfo2="Easily integrated into any existing system"
				solImg3={sol_img81}
				solInfo3="Real-time visualization of wafer inventory quality"
				solImg4={sol_img78}
				solInfo4="Each wafer is rated allowing for Smart Sampling"
				screenImg={sol_img84}
			/>
			<main>
				<SolutionPageHeading
					pageHeading="Take a closer look"
					pageTitle="Wafer Inventory Quality at Your Fingertips"
				/>
				<p className="hmp_closer_content">
					By assessing sensor trace data, WQP assigns a quality score to every wafer in inventory. A summary
					of the wafer inventory quality is provided on an interactive dashboard.
				</p>
				<section className="datalyzer_container">
					<div className="cm_screen">
						<img src={sol_img86} alt="Inventory" />
					</div>
				</section>
				<SolutionPageHeading pageHeading="Use Case 01" pageTitle="Intuitive Drill Down to Root Cause" />
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div style={{ paddingTop: '40px' }}>
							<p className="phase_number">
								<span>STEP </span>01
							</p>
							<p className="solutions__main-card-title wqp_step_heading">Wafer Quality Trend Chart</p>
							<p className="solutions__main-card-content phase_margin">
								Wafer Quality Trend Chart ranks process operations with high risk of yield impact issues
							</p>
						</div>
						<div className="analyzer_img">
							<img src={sol_img85} alt="Wafer Chart" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div style={{ paddingTop: '40px' }}>
							<p className="phase_number">
								<span>STEP </span>02
							</p>
							<p className="solutions__main-card-title wqp_step_heading">Wafer Quality Trend Chart</p>
							<p className="solutions__main-card-content phase_margin">
								Drill down from a problem operation to a Wafer Quality View Table to easily visualize
								which wafers in your manufacturing inventory potentially have quality problems
							</p>
						</div>
						<div className="analyzer_img">
							<img src={sol_img88} alt="Quality Chart" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div style={{ paddingTop: '40px' }}>
							<p className="phase_number">
								<span>STEP </span>03
							</p>
							<p className="solutions__main-card-title wqp_step_heading">
								Lot/Wafer Streaming Sensor Data
							</p>
							<p className="solutions__main-card-content phase_margin">
								Drill down from a problem wafer to see the streaming data details on the possible root
								cause
							</p>
						</div>
						<div className="analyzer_img">
							<img src={sol_img83} alt="Sensor Data" />
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Use Case 02" pageTitle="Data-driven Smart Sampling" />
				<SolutionPageHeading pageHeading="Resource" />
				<div className="brochure_container">
					<Brochure
						brochureHeading="PRODUCT BROCHURE"
						brouchureTitle="BISTel dynammic Fault Detection"
						brochureContent="Download this brochure to discover at-a-glance the key features and benefits of BISTel Dynamic Fault
					Detection(DFD) including a complete environment for language professionals to edit or review
					translations, manage translation projects, organize corporate terminology and connect to machine
					translation."
						brochureImg={sol_img24}
						buttonText="Download"
					/>
					<Brochure
						brochureHeading="CASE STUDY"
						brouchureTitle="Revealing Hidden Capacity For Carlson Products"
						brochureContent="This case study all of the fantastic gains that Austin Peterson, CEO of Carlson Products,
                     was able to see after implementing MachineMetrics including cost savings, full data visibility,
                      and even the ability to garner a Kansas state manufacturing innovation award. Learn how MachineMetrics
                       helped their metal stamping and fabrication shop to increase efficiency by over 20%!"
						brochureImg={sol_img25}
						buttonText="Download"
					/>
				</div>
			</main>
		</Fragment>
	);
}
export default WQPContainer;
