import React, { Fragment } from 'react';
import industry_optimizatn_large from './images/industry_optimizatn_large.png';
import IndustrySolution from '../../components/IndustrySolution';
import industry_prod_small from '../../assets/images/prod_solution/industry_prod_small.png';
import industry_prod_EES_small from './images/industry_prod_EES_small.png';
import industry_prod_elyzer_small from './images/industry_prod_elyzer_small.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: industry_prod_small,
		heading: 'DFD',
		para: 'DFD lets engineers uncover issue more accurately through full sensor trace data analysis',
		button: 'Learn more'
	},
	{
		id: 0,
		src: industry_prod_EES_small,
		heading: 'EES',
		para: 'EES suits better connects equipment, process and engineers to drive productivity higher',
		btnShow: true
	},
	{
		id: 0,
		src: industry_prod_elyzer_small,
		heading: 'eDataLyzer',
		para: 'eDataLyzer applications quickly point root cause of events that impact yield',
		btnShow: true
	}
];
function SemiconductorContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				imgClassName="semicon"
				pageName="Semiconductor & Electronics"
				pageQuestion="How do we optimize Semiconductor Manufacturing?"
				heading="Yield Optimization"
				subHeading="Yield optimization improves product quality by eliminating events that harm
						 				yield."
				content="Random or systematic defects in manufacturing cause yield loss. To prevent this,
										  				semiconductor manufacturers use BISTel’s real-time monitoring and detection
										  				solutions, deploying the most comprehensive monitoring and data analysis tools
										  				on the market. These solutions quickly detect the sources and types of yield
										  				issue then apply industry leading root cause analysis to pinpoint the failure
														  mechanism and the underlying cause of the problem."
				sectionHeading="Process Optimization"
				sectionsubHeading="Industry leading process optimization keeps equipment, engineers and fabs running at
										 maximum performance"
				sectionContent="A.I enabled equipment engineering and automation solutions monitor, detect and
										  			analyze equipment and process data in real-time, enabling customers to identify
										  			bottlenecks and other equipment problems that disrupt production. BISTel process
										  			optimization help manufactures work more efficiently by optimizing equipment
										  			performance, engineering process and to improve quality, productivity and eliminate
												 the threat of downtime."
				img={industry_optimizatn_large}
				alternate="Semiconductor"
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

export default SemiconductorContainer;
