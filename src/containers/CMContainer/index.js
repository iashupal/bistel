import React, { Fragment } from 'react';
import SolutionHeader from '../../components/SolutionsHeader';
import Brochure from '../../components/Brochure';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import sol_img59 from '../../assets/images/solutions/sol_img59.png';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import sol_img55 from '../../assets/images/solutions/sol_img55.png';
import sol_img56 from '../../assets/images/solutions/sol_img56.png';
import sol_img57 from '../../assets/images/solutions/sol_img57.png';
import sol_img58 from '../../assets/images/solutions/sol_img58.png';
import sol_img60 from '../../assets/images/solutions/sol_img60.png';
import sol_img62 from '../../assets/images/solutions/sol_img62.png';
import sol_img61 from '../../assets/images/solutions/sol_img61.png';
import './cm.css';

function CMContainer(props) {
	return (
		<Fragment>
			<SolutionHeader
				title="Solutions"
				imgClassName="allSolution"
				pageTitle="Chamber Matching (CM)"
				content="Maximizing a Fleet to Ensure High Yield"
				solImg1={sol_img56}
				solInfo1="Automatically identifies best chamber"
				solImg2={sol_img57}
				solInfo2="Full trace analysis on all sensors"
				solImg3={sol_img55}
				solInfo3="Time-based chamber analysis made easy"
				solImg4={sol_img58}
				solInfo4="Can compare an unlimited number of chambers"
				screenImg={sol_img59}
			/>
			<main>
				<SolutionPageHeading pageHeading="Take a closer look" />
				<section className="datalyzer_container">
					<div className="cm_screen">
						<img src={sol_img60} alt="CM" />
					</div>
					<div className="dalalyzer_analysis_content">
						<div>
							<p className="solutions__main-card-title">Detailed Chamber Comparison as Easy as 1,2,3</p>
						</div>
						<div>
							<ul className="ees_points cm_points">
								<li>
									<span>Step 1</span>
									<p>Load Full Trace FDC data from corresponding process and chambers</p>
								</li>
								<li>
									<span>Step 1</span>
									<p>Select chamber reference type: Manual or Automatic</p>
								</li>
								<li>
									<span>Step 1</span>
									<p>Run Analysis</p>
								</li>
							</ul>
							<p className="cm_result_min">RESULTS IN MINUTES</p>
							<p className="cm_result_heading">Comprehensive Trace-level Result for each parameter</p>
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Use Case 01" pageTitle="Fleet Chamber Comparison" />
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="cm_left_cards">
							<div className="cm_left_card1">
								<p className="cm_card_heading">MULTI-CHAMBER ANALISYS</p>
								<p className="cm_card_subheading">
									CM can analyze multiple chambers simultaneously which greatly simplifies the chamber
									comparison process
								</p>
							</div>
							<div className="cm_left_card1">
								<p className="cm_card_heading">REFERENCE CHAMBER</p>
								<p className="cm_card_subheading">
									Reference chamber can be automatically selected or manually assigned
								</p>
							</div>
							<div className="cm_left_card1">
								<p className="cm_card_heading">CHAMBER COMPARISON</p>
								<p className="cm_card_subheading">results from the best matched chamber to the worst</p>
							</div>
							<div className="cm_left_card1">
								<p className="cm_card_heading">COMPARISON PARAMETERS AT A GLANCE</p>
								<p className="cm_card_subheading">
									Trace data for selected parameter are overlaid and color coded by chamber
								</p>
							</div>
						</div>
						<div className="analyzer_img">
							<img src={sol_img62} alt="chamber" />
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Use Case 02" pageTitle="Time Based Chamber Performance Analysis" />
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="analyzer_img">
							<img src={sol_img61} alt="chamber" />
						</div>
						<div className="cm_left_cards">
							<div className="cm_left_card1 cm_right_card">
								<p className="cm_card_heading">Comparing chamber performances from two time periods</p>
								<p className="cm_card_subheading">
									CM can help to identify performance changes within a chamber over time
								</p>
							</div>
							<div className="cm_left_card1 cm_right_card">
								<p className="cm_card_heading">Performance Comparison</p>
								<p className="cm_card_subheading">
									Performance changes can be easily identified per parameter
								</p>
							</div>
							<div className="cm_left_card1 cm_right_card">
								<p className="cm_card_heading">Parameter Comparison</p>
								<p className="cm_card_subheading">Results from the most to the least deviated</p>
							</div>
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
export default CMContainer;
