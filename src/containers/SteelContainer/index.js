import React, { Fragment } from 'react';
import IndustrySolution from '../../components/IndustrySolution';
import steel_bg from './images/steel_bg.png';
import dfd_prod from '../../assets/images/prod_solution/dfd_prod.png';
import edl_prod from './images/edl_prod.png';
import hmp_prod from './images/hmp_prod.png';
import Industrycontent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: hmp_prod,
		heading: 'HMP',
		para: 'HMP predicts equipment failures to eliminates production downtime',
		btnShow: true
	},
	{
		id: 0,
		src: edl_prod,
		heading: 'eDataLyzer',
		para: 'eDataLyzer improves quality with industry leading root cause analysis in minutes',
		btnShow: true
	},
	{
		id: 0,
		src: dfd_prod,
		heading: 'DFD',
		para: 'DFD reduces risk by detecting issues that impact yield',
		btnShow: true
	}
];
function SteelContainer(props) {
	return (
		<Fragment>
			<Industrycontent
				title="Industries"
				pageName="Steel"
				imgClassName="steel"
				pageQuestion="How intelligent is your steel plant?"
				heading="Industry 4.0 solutions power data driven, steel manufacturing productivity and quality
								to a higher levels than ever."
				content="Recognizing the value of factory data to create real-time, production intelligence that
								boosts the bottom line. A.I. continuously monitors and analyzes factory data to identify
								potential problems with equipment and processes, and this helps steel makers prevent
								costly stoppages. By applying market leading smart applications, the industry is
								transforming steel manufacturing operations to improve quality, reduces costs and
								increase competitiveness."
				sectionHeading="Traceability and Genealogy"
				sectionsubHeading="Complete traceability from incoming materials to final product"
				sectionContent="Intelligent steel manufacturing means complete traceability throughout the production of
					furnace, stamping, hot rolling or cold rolling processes. Industry leading A.I. data
					analysis helps improve customers’ rolling process by quickly pinpointing the cause of
					ongoing surface defects, and coil size shrinkage issues. The result: Major process and
					quality improvements and sizeable cost reductions from reduced reworks and scraps."
				img={steel_bg}
				alternate="Steel"
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

export default SteelContainer;
