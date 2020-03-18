import React, { Fragment } from 'react';
import sol_img13 from '../../assets/images/solutions/sol_img13.png';
import sol_img12 from '../../assets/images/solutions/sol_img12.png';
import sol_img3 from '../../assets/images/solutions/sol_img3.png';
import sol_img14 from '../../assets/images/solutions/sol_img14.png';
import sol_img21 from '../../assets/images/solutions/sol_img21.png';
import sol_img15 from '../../assets/images/solutions/sol_img15.png';
import sol_img22 from '../../assets/images/solutions/sol_img22.png';
import sol_img23 from '../../assets/images/solutions/sol_img23.png';
import sol_img30 from '../../assets/images/solutions/sol_img30.png';
import sol_img28 from '../../assets/images/solutions/sol_img28.png';
import sol_img29 from '../../assets/images/solutions/sol_img29.png';
import sol_img26 from '../../assets/images/solutions/sol_img26.png';
import sol_img27 from '../../assets/images/solutions/sol_img27.png';
import sol_img31 from '../../assets/images/solutions/sol_img31.png';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import SolutionHeader from '../../components/SolutionsHeader';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import GraphDescription from '../../components/GraphDescription';
import Brochure from '../../components/Brochure';
import './dfd.css';

function DFDContainer(props) {
	return (
		<Fragment>
			<SolutionHeader
				title="Solutions"
				pageTitle="Dynamic Fault Detection (DFD)"
				content="Next-Generation Fault Detection Offers Full Trace Analysis Overcoming the Limitations of
							Legacy FDC Systems"
				solImg1={sol_img12}
				solInfo1="Real-time full sensor trace analysis on all sensors"
				solImg2={sol_img3}
				solInfo2="No limit modelling required"
				solImg3={sol_img13}
				solInfo3="False alarm reduction by more than 10X"
				screenImg={sol_img14}
			/>
			<SolutionPageHeading pageHeading="Take a closer look 01" pageTitle="Full Sensor Trace Fault Detection" />
			<GraphDescription
				graphHeading="Traditional FDC"
				graphContent="Typical FDC systems summarize trace data at certain recipe steps : average, min, max, std dev,
					range, etc."
				graphImg={sol_img21}
			/>
			<GraphDescription
				graphHeading="BISTel DFD (Dynamic Fault Detection)"
				graphContent="Sensor trace data has a wealth of information, containing many nuances and details
                 of a process that could help identify subtle yield or tool issues"
				graphImg={sol_img15}
			/>
			<SolutionPageHeading
				pageHeading="Take a closer look 02"
				pageTitle="Effortless Analysis"
				pageContent="Alarm Summary to Trace Results are Just One Click Away"
			/>
			<div className="phase_container">
				<div className="temperature_container alarm_container">
					<div>
						<img src={sol_img26} alt="Alarm Summary" />
					</div>
					<div className="steps_card">
						<p className="steps">Step 1</p>
						<p className="solutions__sub-card-subtitle">DFD Alarm Trend and Alarm Summary Dashboard</p>
					</div>
				</div>
				<div className="temperature_container alarm_container">
					<div>
						<img src={sol_img27} alt="Alarm Chart" />
					</div>
					<div className="steps_card">
						<p className="steps">Step 2</p>
						<p className="solutions__sub-card-subtitle">DFD Alarm Trace Chart Dashboard</p>
					</div>
				</div>
				<div className="temperature_container alarm_container">
					<div>
						<img src={sol_img31} alt="Configure temperature" />
					</div>
					<div className="steps_card">
						<p className="steps">Step 3</p>
						<p className="solutions__sub-card-subtitle">Configure Trace Chart Options</p>
					</div>
				</div>
			</div>
			<SolutionPageHeading pageHeading="UseCase" pageTitle="Comprehensive Fault Detection" />

			<div className="phase_container">
				<p className="phase_number">
					<span>Case </span>01
				</p>
				<p className="solutions__card-title phase_margin">Full Sensor Trace Coverage</p>
				<p className="solutions__main-card-content phase_margin">
					Equipment : Etcher / Process : BE / Parameter : He_Flow
				</p>
			</div>
			<GraphDescription
				graphHeading="Traditional FDC"
				graphContent="Typical FDC systems summarize trace data at certain recipe steps : average, min, max, std dev,
					range, etc."
				graphImg={sol_img22}
			/>
			<GraphDescription
				graphHeading="BISTel DFD (Dynamic Fault Detection)"
				graphContent="Typical FDC systems summarize trace data at certain recipe steps : average, min, max, std dev,
					range, etc."
				graphImg={sol_img23}
			/>
			<div className="phase_container">
				<p className="phase_number">
					<span>Case </span>02
				</p>
				<p className="solutions__card-title phase_margin">DEtection of Subtle issue</p>
				<p className="solutions__main-card-content phase_margin">
					Process : Lithography / Parameter : Resist Bake Plate Temperature
				</p>
			</div>
			<div className="phase_container">
				<p className="solutions__main-card-title graph_heading">Traditional FDC</p>
				<div className="temperature_container">
					<img src={sol_img28} alt="Temperature" />
					<p>A. Abnormal temperature profile for wafers #14, #15, #16</p>
				</div>
				<div className="temperature_container">
					<img src={sol_img29} alt="Temperature" />
					<p>B. Wafers passed SPC Limits</p>
				</div>
			</div>
			<GraphDescription
				graphHeading="BISTel DFD (Dynamic Fault Detection)"
				graphContent="DFD easily identified the abnormality using trace analysis"
				graphImg={sol_img30}
			/>
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
		</Fragment>
	);
}
export default DFDContainer;
