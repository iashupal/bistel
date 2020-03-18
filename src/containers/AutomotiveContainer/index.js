import React, { Fragment } from 'react';
import IndustrySolution from '../../components/IndustrySolution';
import automotive_schedule from './images/automotive_schedule.png';
import cm_prod from './images/cm_prod.png';
import edl_prod from '../../assets/images/prod_solution/edl_prod.png';
import hmp_prod from '../../assets/images/prod_solution/hmp_prod.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: hmp_prod,
		heading: 'HMP',
		para: 'HMP tracks the health and performance of your asset anytime',
		btnShow: true
	},
	{
		id: 0,
		src: cm_prod,
		heading: 'CM',
		para: 'Chamber Matching (CM) application boosts fleet performance by quickly identifying the golden chamber',
		btnShow: true
	},
	{
		id: 0,
		src: edl_prod,
		heading: 'DFD',
		para: 'DFD`s full trace data analysis improves accuracy and performance',
		btnShow: true
	}
];
function AutomotiveContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Automotive"
				imgClassName="automotive"
				pageQuestion="How do we eliminate unscheduled maintenance?"
				heading="Health Monitoring, Detection and Prediction"
				subHeading="Yield optimization improves product quality by eliminating events that harm
					yield."
				content="Downtime due to unscheduled maintenance has a huge, negative impact on
					manufacturing productivity. Gartner estimates machine downtime can cost as much
					as $300,000 per minute. To avoid costly downtime, manufacturers rely on BISTel’s
					real-time, intelligent health monitoring and predictive maintenance solution,
					which monitors equipment and processes, detects faults in production and
					predicts when equipment will fail. Result: Quality uptime and immense cost
					savings for auto manufacturers and their suppliers."
				sectionHeading="Inefficient Maintenance Scheduling"
				sectionsubHeading="Poor maintenance scheduling and high parts replacement costs can lead low
					productivity across plant"
				sectionContent="Solving factory issues with intelligent A.I. solutions means connecting millions of
					data across factory, engineering systems, equipment, and processes. This creates
					real-time insights. Powerful A.I. enables predictive analytics to discover patterns
					and recommend solutions to the many production issues that arise in the plant
					throughout the day. Smart applications that evaluate machine and process
					performance, gather predictive analytical insights to eliminate downtime due to
					equipment or parts failure."
				img={automotive_schedule}
				alternate="Automotive"
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
			{/* </main> */}
		</Fragment>
	);
}

export default AutomotiveContainer;
