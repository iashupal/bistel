import React, { Fragment } from 'react';
import electronics_bg from './images/electronics_bg.png';
import IndustrySolution from '../../components/IndustrySolution';
import dfd_prod from '../../assets/images/prod_solution/dfd_prod.png';
import fpd_edl from '../../assets/images/prod_solution/fpd_edl.png';
import hmp_prod from '../../assets/images/prod_solution/hmp_prod.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: dfd_prod,
		heading: 'DFD',
		para: 'DFD lets engineers uncover issue more accurately through full sensor trace data analysis'
	},
	{
		id: 0,
		src: fpd_edl,
		heading: 'eDataLyzer',
		para: 'eDataLyzer for quickest root cause analysis'
	},
	{
		id: 0,
		src: hmp_prod,
		heading: 'HMP',
		para: 'HMP Equipment Health Monitoring and Predictive Maintenance for constant uptime'
	}
];
function ElectronicsAssembleContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Electronics Assembly & PCB"
				imgClassName="electronics"
				pageQuestion="How does BISTel Industry 4.0 Drive Electronic Assembly and PCB Manufacturing
					Competitiveness?"
				heading="Increase factory control and automation, add A.I. Smart Applications"
				content="BISTel smart manufacturing solutions help EAM and PCB makers positively impact
					operations and profitability. With IoT, A.I. enabled analytics, and greater partner
					collaboration, Intelligent solutions create transparent and plant wide improvements,
					extending the life of machines through predictive insights. Advanced data analysis tools
					mine structured and unstructured data to deliver actionable intelligence that results in
					better decision making across the plant, including predicting equipment failure and
					executing record fast root cause analysis."
				sectionHeading="Rising parts and production costs in low-cost manufacturing markets make it tough for
					electronics assembly and PCB producers to remain competitive."
				sectionContent="	Innovative new smart factory applications like BISTel’s Asset Performance Management
					solution (APM) helps customers improve plant wide efficiencies by monitoring the health and
					performance of equipment from creation to consumption. BISTel analytics optimize plant
					resources, supply chain and quality control, transforming processes and operational
					performance through continuous optimization."
				img={electronics_bg}
				altername="Electronics Assembly"
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

export default ElectronicsAssembleContainer;
