import React, { Fragment } from 'react';
import pharmaceutial_bg from './images/pharmaceutial_bg.png';
import IndustrySolution from '../../components/IndustrySolution';
import industry_prod_small from '../../assets/images/prod_solution/industry_prod_small.png';
import industry_prod_elyzer_small from './images/industry_prod_elyzer_small.png';
import industry_prod_EES_small from './images/industry_prod_EES_small.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: industry_prod_small,
		heading: 'DFD',
		para: 'DFD lets engineers uncover issue more accurately through full sensor trace data analysis'
	},
	{
		id: 0,
		src: industry_prod_EES_small,
		heading: 'EES',
		para: 'EES suits better connects equipment, process and engineers to drive productivity higher'
	},
	{
		id: 0,
		src: industry_prod_elyzer_small,
		heading: 'eDataLyzer',
		para: 'eDataLyzer applications quickly point root cause of events that impact yield'
	}
];
function PharmaceuticalContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Pharmaceutical"
				imgClassName="pharmaceutical"
				pageQuestion="How does Industry 4.0 help pharmaceutical manufacturers reduce risk?"
				heading="Data is key to reducing risk, increasing quality and improving pharmaceutical
					manufacturing performance"
				content="IoT enabled, real-time data detection, and analytics produces actionable insights that
					enhance pharmaceutical operations by optimizing production processes, reducing costs and
					improving business performance. BISTel smart applications access and gather information
					from equipment, processes and formerly siloed environments across the plant to create
					new insights that are key to achieving pharmaceutical manufacturing excellence.
					Real-time data produces intelligence that deliver products to market faster, with less
					risk, made by equipment that last longer."
				sectionHeading="Intelligent Manufacturing Makes Conditioned Based Maintenance the Norm for Pharma
					Manufacturing"
				sectionContent="A.I. Equipment Health Monitoring and Predictive maintenance (HMP) detects and classifies
					faults in production to guard against events that cause yield loss. A.I. driven predictive
					maintenance application then tells you when your equipment will fail before it happens and
					lets you know the remaining useful life. This new approach moves customers to a more
					accurate conditioned based maintenance versus the more costly scheduled based approach. The
					result: An efficient, data driven factory with no equipment downtime, high yields and high
					customer satisfaction."
				img={pharmaceutial_bg}
				alternate="Pharmaceutial"
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

export default PharmaceuticalContainer;
