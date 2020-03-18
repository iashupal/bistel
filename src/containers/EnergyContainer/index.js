import React, { Fragment } from 'react';
import energy_bg from './images/energy_bg.png';
import IndustrySolution from '../../components/IndustrySolution';
import dfd_prod from '../../assets/images/prod_solution/dfd_prod.png';
import edl_prod from '../../assets/images/prod_solution/edl_prod.png';
import hmp_prod from '../../assets/images/prod_solution/hmp_prod.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: hmp_prod,
		heading: 'HMP',
		para: 'New Equipment Health Monitoring predicts failures to increase asset utilization',
		btnShow: true
	},
	{
		id: 0,
		src: dfd_prod,
		heading: 'DFD',
		para: 'Next generation dynamic fault detection solution reduces alarm rate 10X',
		btnShow: true
	},
	{
		id: 0,
		src: edl_prod,
		heading: 'eDataLyzer',
		para: 'eDataLyzer improves quality with industry leading root cause analysis',
		btnShow: true
	}
];
function EnergyContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Energy"
				imgClassName="energy"
				pageQuestion="How does Industry 4.0 increase energy production efficiency and boost equipment utilization?"
				heading="Yield Optimization"
				subHeading="Industry 4.0 technology changes the entire global energy industry creating new
					business opportunities for manufacturers."
				content="Random or systematic defects in manufacturing cause yield loss. To prevent this,
					semiconductor manufacturers use BISTel’s real-time monitoring and detection
					solutions, deploying the most comprehensive monitoring and data analysis tools
					on the market. These solutions quickly detect the sources and types of yield
					issue then apply industry leading root cause analysis to pinpoint the failure
					mechanism and the underlying cause of the problem."
				sectionHeading="Process Optimization"
				sectionsubHeading="BISTel helps energy providers utilize manufacturing data to increase energy
					efficiency, increase equipment utilization and reduce costs."
				sectionContent="Applying A.I. driven smart applications for energy production companies, unlocks new
					business value. BISTel solutions connect equipment, analyze data, visualize
					information and integrate engineers and processes to ensure intelligent and timely
					decisions, driven by new business insight. The result: Increased equipment
					utilization and factory wide productivity improvement."
				img={energy_bg}
				alternate="Energy"
			/>
			<section className="main__container main_solution">
				<div className="solution_container">
					<p className="main__intro-heading solution_heading">Related Solution</p>
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

export default EnergyContainer;
