import React, { Fragment } from 'react';
import IndustrySolution from '../../components/IndustrySolution';
import fdp_opr from './images/fdp_opr.png';
import fpd_edl from '../../assets/images/prod_solution/fpd_edl.png';
import fpd_hmp1 from './images/fpd_hmp1.png';
import fpd_prod1 from './images/fpd_prod1.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: fpd_prod1,
		heading: 'AMP',
		para: 'AMP provides 100 percent visibility into the health and performance of your asset',
		btnShow: false
	},
	{
		id: 0,
		src: fpd_hmp1,
		heading: 'HMP',
		para: 'Predictive Maintenance (PdM) eliminates disruption in production by identifying equipment failures',
		btnShow: true
	},
	{
		id: 0,
		src: fpd_edl,
		heading: 'eDataLyzer',
		para: 'eDataLyzer data analysis tools help FPD makers like BOE maintain high yields',
		btnShow: true
	}
];
function FlatPanelContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Flat Panel Display"
				imgClassName="fpd"
				pageQuestion="How does smart manufacturing lower FPD production costs?"
				heading="Eliminate Unscheduled Downtime"
				content="In a highly competitive flat panel industry, new IoT, A.I. solutions achieve
					continuous yield optimization and higher productivity by increasing equipment
					uptime that lower production costs. As data surges, BISTel helps FPD makers
					achieve huge cost efficiencies by tapping into factory wide data and applying
					A.I. to perform data collection, data analysis and predictive analytics that
					evaluate production 24/7 keeping quality high, predicting equipment servicing to
					avoid disruptions in production."
				sectionHeading="Operational Efficiency Improvement"
				sectionsubHeading="Real-time Data Analysis and Predictive Analytics Improve operational efficiencies"
				sectionContent="BISTel’s new suit of A.I. smart applications embed human knowledge and incorporate
					machine learning algorithms to autonomously improve manufacturing effectiveness.
					This increases FPD production efficiency from machine to machine and across the
					factory floor. Data analysis and predictive analytics then help FPD makers integrate
					and analyze data from the factory and from external systems to create real time
					insights that can be acted on immediately. BISTel solutions increased machine
					automation creating quality products faster, more efficiently and at substantially
					lowers production costs."
				img={fdp_opr}
				alternate="Flat Panel Display"
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

export default FlatPanelContainer;
