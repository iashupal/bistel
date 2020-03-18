import React, { Fragment } from 'react';
import SolutionHeader from '../../components/SolutionsHeader';
import sol_img41 from '../../assets/images/solutions/sol_img41.png';
import sol_img42 from '../../assets/images/solutions/sol_img42.png';
import sol_img39 from '../../assets/images/solutions/sol_img39.png';
import sol_img40 from '../../assets/images/solutions/sol_img40.png';
import sol_img43 from '../../assets/images/solutions/sol_img43.png';
import sol_img49 from '../../assets/images/solutions/sol_img49.png';
import sol_img48 from '../../assets/images/solutions/sol_img48.png';
import sol_img47 from '../../assets/images/solutions/sol_img47.png';
import sol_img44 from '../../assets/images/solutions/sol_img44.png';
import sol_img45 from '../../assets/images/solutions/sol_img45.png';
import sol_img46 from '../../assets/images/solutions/sol_img46.png';
import sol_img52 from '../../assets/images/solutions/sol_img52.png';
import sol_img50 from '../../assets/images/solutions/sol_img50.png';
import sol_img51 from '../../assets/images/solutions/sol_img51.png';
import sol_img53 from '../../assets/images/solutions/sol_img53.png';
import sol_img54 from '../../assets/images/solutions/sol_img54.png';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import Brochure from '../../components/Brochure';
import GraphDescription from '../../components/GraphDescription';

import './datalyzer.css';

function DatalyzerContainer(props) {
	return (
		<Fragment>
			<SolutionHeader
				title="Solutions"
				imgClassName="allSolution"
				pageTitle="eDataLyzer"
				content="Advanced Data Analytics Platform Improves Yield and Quality with Quick and Accurate Root Cause Analysis"
				solImg1={sol_img39}
				solInfo1="Integration of various data sources into a central database"
				solImg2={sol_img42}
				solInfo2="Automatically detect and classify wafer map patterns"
				solImg3={sol_img41}
				solInfo3="Effortless mining of large datasets"
				solImg4={sol_img40}
				solInfo4="Thorough root cause analysis utilizing full sensor trace"
				screenImg={sol_img43}
			/>
			<main>
				<SolutionPageHeading pageHeading="Take a closer look" pageTitle="Best-in-class Root Cause Analysis" />
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="analyzer_img">
							<img src={sol_img49} alt="Analyzer" />
						</div>
						<div>
							<img src={sol_img45} alt="product" />
							<p className="solutions__card-title analyse_margin">Map Analyzer | MA</p>
							<ul className="ees_points analyse_points">
								<li>• Automatic grouping of wafer patterns</li>
								<li>• Ranking of patterns based on yield impact, pattern size, etc.</li>
								<li> • No pre-defined pattern library required</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div>
							<img src={sol_img44} alt="Product" />
							<p className="solutions__card-title analyse_margin">IntelliMine | IM</p>
							<ul className="ees_points analyse_points">
								<li>
									• Analyze quality issues using various types of data (e.g.: Yield, Etest, Metrology,
									Defect, etc.)
								</li>
								<li> • Select the best algorithm for analysis automatically</li>
								<li> • Streamline probable causes to improve engineer’s efficiency</li>
							</ul>
						</div>
						<div className="analyzer_img">
							<img src={sol_img48} alt="Analyzer" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="analyzer_img">
							<img src={sol_img47} alt="Analyzer" />
						</div>
						<div>
							<img src={sol_img46} alt="Analyze Product" />
							<p className="solutions__card-title analyse_margin">Trace Analyzer | TA</p>
							<ul className="ees_points analyse_points">
								<li>
									• Comprehensive detection of any abnormalities on sensor traces, no matter how
									subtle
								</li>
								<li>• Pinpoint root causes down to recipe step level</li>
								<li> • Significant reduction in root cause analysis time</li>
							</ul>
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Use Case" pageTitle="Edge Patch Open/Short Failure Use Case" />
				<GraphDescription
					graphHeading="The Issue"
					graphContent="2 wafer lots suffered edge patch power short and scan failure at the 5 and 11 o’clock position"
					graphImg={sol_img52}
				/>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div>
							<p className="solutions__main-card-title graph_heading">The Analysis</p>
							<p className="solutions__main-card-content">
								Accurately Pinpointing Root Causes in Minutes
							</p>
							<p className="phase_number">
								<span>STEP </span>01
							</p>
							<p className="solutions__card-title phase_margin">Intelligent Wafer Map Sorting</p>
							<p className="solutions__main-card-content phase_margin">
								Map Analyzer(MA) clustered all the wafer maps and automatically identified similar
								pattern
							</p>
						</div>
						<div className="analyzer_img">
							<img src={sol_img53} alt="Analyzer" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div>
							<p className="phase_number">
								<span>STEP </span>02
							</p>
							<p className="solutions__card-title phase_margin">Effortless Tool Commodity Analysis</p>
							<p className="solutions__main-card-content phase_margin">
								Based on the clustered wafers from MA, IntelliMine (IM) performed correlation analysis
								versus the good wafer group and identified the suspicious tool/chamber
							</p>
						</div>
						<div className="analyzer_img">
							<img src={sol_img54} alt="Analyzer" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div>
							<p className="phase_number">
								<span>STEP </span>03
							</p>
							<p className="solutions__card-title phase_margin">
								Accurate Trace-level Root Cause Analysis
							</p>
							<p className="solutions__main-card-content phase_margin">
								Trace Analyzer (TA) identified 2 root cause parameters that signaled the problem to be
								an arching issue at the ESC chuck
							</p>
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="analyzer_img">
							<img src={sol_img51} alt="Analyzer" />
							<p className="root_cause_pt">Root Cause #1</p>
							<p className="solutions__main-card-content phase_margin" style={{ textAlign: 'center' }}>
								EtchHeLeak Rate
							</p>
						</div>
						<div className="analyzer_img accurate_level_img">
							<img src={sol_img50} alt="Analyzer" />
							<p className="root_cause_pt">Root Cause #1</p>
							<p className="solutions__main-card-content phase_margin" style={{ textAlign: 'center' }}>
								EtchESCCurrentLeakage
							</p>
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="datalyzer_result">
						<div>
							<p className="solutions__main-card-title result_heading">The Results</p>
						</div>
						<div>
							<ul className="ees_points analyse_points result_points">
								<li>
									<p className="solutions__card-title phase_margin">
										Exact Root Cause Identified in Minutes
									</p>
									<p className="solutions__main-card-content phase_margin">
										eDataLyzer helped to quickly and accurately pinpoint the root cause of the wafer
										edge yield loss issue (from potentially days to minutes)
									</p>
								</li>
								<li>
									<p className="solutions__card-title phase_margin">
										Identified Critical Yield-impacting Parameters
									</p>
									<p className="solutions__main-card-content phase_margin">
										The solution enabled the engineer to uncover a key unmonitored parameter to be
										added to the critical parameter list
									</p>
								</li>
								<li>
									<p className="solutions__card-title phase_margin">Minimal Resource Required</p>
									<p className="solutions__main-card-content phase_margin">
										One single engineer performed the entire root cause analysis, no additional
										domain resources required
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>
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
export default DatalyzerContainer;
