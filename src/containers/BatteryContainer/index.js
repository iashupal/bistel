import React, { Fragment } from 'react';
import battery_bg from './images/battery_bg.png';
import IndustrySolution from '../../components/IndustrySolution';
import dfd_prod from '../../assets/images/prod_solution/dfd_prod.png';
import ees_prod from './images/ees_prod.png';
import hmp_prod from './images/hmp_prod.png';
import IndustryContent from '../../components/IndustryContent';

const solutionData = [
	{
		id: 0,
		src: ees_prod,
		heading: 'EES',
		para: 'Real-time monitoring and contro applications transform large data into actionable insights',
		btnShow: true
	},
	{
		id: 0,
		src: dfd_prod,
		heading: 'DFD',
		para: 'Next generation dynamic fault detection solution reduces alarm rates 10X',
		btnShow: true
	},
	{
		id: 0,
		src: hmp_prod,
		heading: 'HMP',
		para: 'Complete Health Monitoring and Prediction System for smart manufacturing',
		btnShow: true
	}
];
function BatteryContainer(props) {
	return (
		<Fragment>
			<IndustryContent
				title="Industries"
				pageName="Rechargeable Battery"
				imgClassName="battery"
				pageQuestion="How do rechargeable battery manufacturers unlock the full value of their data?"
				heading="Data driven decision making to Operationalize Technology"
				content="Operationalizing analysis and production insights begin with BISTel’s automated data
					cleaning, collection and contextualization tools critical to building real-time, data
					modeling. For most rechargeable battery manufacturers, 75 percent of the time is spent
					here with only 25 percent of the time for the value add - analytics and insight. A
					20-year domain expert, BISTel addresses this issue with Industry 4.0 solutions that
					handle manufacturing’s unique data, and equipment system’s needs. A.I. data analysis
					tools enable manufacturers to perform seamless data modeling, contextualization, and
					management."
				sectionHeading="Operationalize analysis and insights to deliver meaningful results to the user"
				sectionContent="Evaluating how manufacturers will consume the analysis is key to success. BISTel offers
					interactive dashboards for the various manufacturing audiences that use the data. Operators,
					engineers, and factory managers all have different needs. BISTel offers insights to address
					each user’s needs in a way that is meaningful and does not include insights they find
					irrelevant. Real-time monitoring, advanced A.I. data analysis and predictive analytics turn
					equipment, sensor data into action that drives yield and operational improvements."
				img={battery_bg}
				alternate="Battery"
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

export default BatteryContainer;
