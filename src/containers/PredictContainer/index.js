import React from 'react';
import sol_img2 from '../../assets/images/solutions/sol_img2.png';
import SolutionOverview from '../../components/SolutionOverview';

function PredictContainer(props) {
	return (
		<SolutionOverview
			titleInfo="Predictive Analysis"
			title="PREDICT"
			heading="Constant Uptime with Real-time Monitoring of Equipment and Processes"
			subHeading="Accurately predict the remaining useful life of mission critical components"
			content1="BISTel’s third core capability lets manufacturers predict outcomes before they occur.
            AI based predictive applications that leverage machine learning algorithms and embedded human
            knowledge enable equipment and processes to make more complex decisions, real-time."
			content2="For instance, BISTel’s new equipment Health Monitoring & Predictive maintenance (HMP)
            solution combines real-time, issue detection, advanced analysis of real-time data against historical
            trends and patterns to determine the condition of the equipment coupled with new predictive
            capabilities that let customers accurately predict the health of their equipment or mission critical
            components at any point in time. This innovative new application also predicts the Remaining Useful
             Life (RUL) of equipment, making downtime a thing of the past."
			img={sol_img2}
			alternate="Predict Analysis"
			challangeHeading="Common Challanges"
			challangeHeadingText1="Unexpected equipment failures is causing downtime leading to product productivity and quality loss"
			challangeHeadingText2="Some components are being replaced too often and some components are failing before the scheduled maintenance period"
			challangeHeadingText3="There is no way to visualize product quality of all the wafers during the manufacturing process,
             issues are caught too late in the process resulting in unnecessary cost"
			challangeHeadingText4="Random sampling in metrology is not always effective, I wish there was a more data-driven method to pick samples"
			solHeading="Solutions"
			solsubHeading="AI-drive predictive analytic solutions"
			cardTitle1="HMP"
			cardTitle2="WQP"
			cardsubTitle1="HMP tracks the health and performance of your asset anytime"
			cardsubTitle2="Wafer Quality Predictor provides real-time visualization of wafer inventory quality"
			buttonText="Learn More"
		/>
	);
}
export default PredictContainer;
