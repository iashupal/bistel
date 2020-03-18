import React, { Fragment } from 'react';
import led_bg from './images/led_bg.png';
import IndustrySolution from '../../components/IndustrySolution';
import prod_hmp from './images/prod_hmp.png';
import prod_wqp from './images/prod_wqp.png';
import edl_prod from '../../assets/images/prod_solution/edl_prod.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: prod_hmp,
		heading: 'DFD',
		para: 'Intuitive dashboards provide a full range of information to maximize fleet performance'
	},
	{
		id: 0,
		src: prod_wqp,
		heading: 'EES',
		para: 'Trace Analyzer performs full sensor trace data analysis to improve quality'
	},
	{
		id: 0,
		src: edl_prod,
		heading: 'eDataLyzer',
		para: 'Wafer Quality Predictor provides real-time visualization of wafer inventory quality'
	}
];
function LedContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="LED Manufacturing"
				imgClassName="led"
				pageQuestion="How does A.I. improve fleet equipment performance for LED Manufacturers?"
				heading="Connecting equipment across a common data platform optimizes performance from design to
							production."
				content="LEDs offer unmatched energy efficiency performance, consuming 90% less power than
							incandescent lights. With market leading A.I. data analysis tools, LED device
							manufacturers are now able to increase bottom line performance, allowing customers to
							improve the way they make LEDs. BISTel’s solutions increase productivity with IoT, A.I.
							technology digitally connecting equipment across a common data platform to optimize
							performance from design to production."
				sectionHeading="Achieve Constant Uptime of Machines and Processes"
				sectionsubHeading="Industry leading process optimization keeps equipment, engineers and fabs running at
										 maximum performance"
				sectionContent="A.I. based, real-time monitoring, advanced data analysis tools and predictive analytics
							combine to increase product quality and cut production costs significantly by accurately
							identifying problems before they occur. A new A.I. Health Monitoring and Predictive
							Maintenance (HMP) solution analyzes the health and performance of equipment in real-time,
							then optimizes maintenance programs to increase equipment uptime."
				img={led_bg}
				alternate="Led manufacturing"
			/>
			<section class="main__container main_solution">
				<div className="solution_container">
					<p class="main__intro-heading solution_heading">Related Solution</p>
				</div>
				<div className="solution_content">
					{Object.keys(solutionData).map((key) => {
						return (
							<IndustrySolution
								key={key}
								img={solutionData[key].src}
								heading={solutionData[key].heading}
								para={solutionData[key].para}
								buttonText="Learn more"
							/>
						);
					})}
				</div>
			</section>
		</Fragment>
	);
}

export default LedContainer;
