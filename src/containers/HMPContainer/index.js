import React, { Fragment } from 'react';
import SolutionHeader from '../../components/SolutionsHeader';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import Brochure from '../../components/Brochure';
import sol_img63 from '../../assets/images/solutions/sol_img63.png';
import sol_img64 from '../../assets/images/solutions/sol_img64.png';
import sol_img65 from '../../assets/images/solutions/sol_img65.png';
import sol_img66 from '../../assets/images/solutions/sol_img66.png';
import sol_img67 from '../../assets/images/solutions/sol_img67.png';
import sol_img68 from '../../assets/images/solutions/sol_img68.png';
import sol_img69 from '../../assets/images/solutions/sol_img69.png';
import sol_img70 from '../../assets/images/solutions/sol_img70.png';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import sol_img72 from '../../assets/images/solutions/sol_img72.png';
import sol_img73 from '../../assets/images/solutions/sol_img73.png';
import sol_img74 from '../../assets/images/solutions/sol_img74.png';
import sol_img75 from '../../assets/images/solutions/sol_img75.png';
import sol_img76 from '../../assets/images/solutions/sol_img76.png';
import sol_img77 from '../../assets/images/solutions/sol_img77.png';
import sol_img71 from '../../assets/images/solutions/sol_img71.png';
import './hmp.css';

function HMPContainer(props) {
	return (
		<Fragment>
			<SolutionHeader
				title="Solutions"
				imgClassName="allSolution"
				pageTitle="Health Monitoring and Prediction (HMP)"
				content="Complete Health Monitoring and Prediction System"
				solImg1={sol_img63}
				solInfo1="Full trace analysis of historical and real-time data"
				solImg2={sol_img64}
				solInfo2="Fault detection sends early warning alarm before incident"
				solImg3={sol_img65}
				solInfo3="Remaining Useful Life (RUL) enables Predictive Maintenance"
				solImg4={sol_img66}
				solInfo4="No more unscheduled downtime due to component failure"
				screenImg={sol_img67}
			/>
			<main>
				<SolutionPageHeading pageHeading="Take a closer look 01" pageTitle="Key Capabilities of HMP" />
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="hmp_card_content">
							<img src={sol_img68} alt="Capability of HMP" />
						</div>
						<div>
							<p className="hmp_heading">Fault Detection</p>
							<p className="solutions__main-card-content">
								HMP monitors your equipment or manufacturing assets, such as motors or pumps in
								real-time providing early warning of potential failures
							</p>
							<p className="hmp_card_hint">
								* Streaming vibration data from a motor is monitored in real-time
							</p>
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="hmp_card_content">
							<p className="hmp_heading">Fault Classification</p>
							<p className="solutions__main-card-content">
								In conjunction with user-provided knowledge based on domain, the solution examines the
								data to look for and identify patterns that are indicative of specific failure
								classification
							</p>
							<p className="hmp_card_hint">
								* The frequency spectrum is analyzed to determine failure type
							</p>
						</div>
						<div>
							<img src={sol_img70} alt="Fault Classification" />
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="hmp_card_content">
							<img src={sol_img69} alt="RUL Prediction" />
						</div>
						<div>
							<p className="hmp_heading">RUL Prediction</p>
							<p className="solutions__main-card-content">
								Using historical data, the solution intelligently predicts Remaining Useful Life (RUL)
								of an asset enabling maintenance, repair, or replacement before it fails
							</p>
							<p className="hmp_card_hint">* Remaining Useful Life of the motor is projected</p>
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Take a closer look 02" pageTitle="Intuitive Role-based Dashboard" />
				<p className="hmp_closer_content">
					The intuitive HMP dashboard provides a full range of information to help you manage your fleet of
					equipment - from health summary to remaining useful lives (RUL)
				</p>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="hmp_card_content">
							<img className="img_responsive" src={sol_img72} alt="Health summary" />
							<p className="hmp_equipment_text">Equipment Health Summary</p>
						</div>
						<div className="hmp_card_content">
							<img className="img_responsive" src={sol_img73} alt="Alarm Classification" />
							<p className="hmp_equipment_text">Alarm Classification Summary</p>
						</div>
					</div>
				</section>
				<section className="datalyzer_container">
					<div className="dalalyzer_analysis_content">
						<div className="hmp_card_content">
							<img className="img_responsive" src={sol_img74} alt="Alarm summnary" />
							<p className="hmp_equipment_text">Equipment Alarm Summary</p>
						</div>
						<div className="hmp_card_content">
							<img className="img_responsive" src={sol_img75} alt="Health" />
							<p className="hmp_equipment_text">Individual Equipment Health Index</p>
						</div>
					</div>
				</section>
				<SolutionPageHeading
					pageHeading="Use Case"
					pageTitle="Reduce Maintenance Cost with Predictive Maintenance"
				/>
				<section className="datalyzer_container hmp_Maintenance_card">
					<p className="hmp_maintenance_heading">
						Monitoring Equipment Health:<br /> Remaining Useful Life information
					</p>
					<p className="hmp_maintenance_subheading">
						HMP monitors critical equipment and provides Remaining Useful Life (RUL) information.<br />This
						allows Predictive Maintenance (PdM) which maximizes equipment utilization without the risk of
						downtime due to failure.
					</p>
					<div>
						<img className="img_responsive" src={sol_img76} alt="Predictive maintenance" />
					</div>
					<div className="dalalyzer_analysis_content hmp_info_card">
						<div>
							<img src={sol_img77} alt="Information" />
							<p className="hmp_prod_card_text">
								Lost Production time<br /> Equipment Repair cost <br /> Labor Cost
							</p>
						</div>
						<div>
							<p className="hmp_maintenance_subheading">
								With Predictive Maintenance, total maintenance cost can be significantly reduced. (i.e.:
								equipment repair cost, labor cost, lost production time, etc.)
							</p>
						</div>
					</div>
				</section>
				<section className="datalyzer_container hmp_Maintenance_card">
					<p className="hmp_maintenance_heading">
						Predictive Maintenance (PdM) <br /> for the actual condition of the equipment
					</p>
					<p className="hmp_maintenance_subheading">
						HMP enables Predictive Maintenance (PdM) by optimizing the maintenance schedule based on the
						health condition of the asset
					</p>
					<div className="hmp_divide_module">
						<div>
							<div className="">
								<p className="cm_card_heading hmp_layer_heading">Twice a month</p>
								<p className="hmp_layer_subheading">Time-based Maintenance Schedule</p>
							</div>
							<div className="hmp_layer_card">
								<p className="cm_card_heading hmp_layer_heading">Maintenance when required</p>
								<p className="hmp_layer_subheading">Maintenance Schedule with Predictive Analysis</p>
							</div>
						</div>
						<img className="img_responsive" src={sol_img71} alt="Maintenance" />
					</div>
					<div className="dalalyzer_analysis_content hmp_info_card">
						<div>
							<img src={sol_img77} alt="Information" />
							<p className="hmp_prod_card_text">
								Equipment Repair Cost <br />Labor Cost<br />Lost Production Cost{' '}
							</p>
						</div>
						<div>
							<p className="hmp_maintenance_subheading">
								This could significantly reduce equipment repair cost, maintenance labor cost, and lost
								production time due to scheduled downtime.
							</p>
						</div>
					</div>
				</section>
				<SolutionPageHeading pageHeading="Resource" />
				<div className="brochure_container">
					<Brochure
						brochureHeading="PRODUCT BROCHURE"
						brouchureTitle="BISTel dynammic Fault Detection"
						brochureContent="Download this brochure to discover at-a-glance the key features and benefits of BISTel Dynamic Fault
					Detection(DFD) including a complete environment for language professionals to edit or review
					translations, manage translation projects, organize corporate terminology and connect to machine
					translation."
						brochureImg={sol_img24}
						buttonText="Download"
					/>
					<Brochure
						brochureHeading="CASE STUDY"
						brouchureTitle="Revealing Hidden Capacity For Carlson Products"
						brochureContent="This case study all of the fantastic gains that Austin Peterson, CEO of Carlson Products,
                     was able to see after implementing MachineMetrics including cost savings, full data visibility,
                      and even the ability to garner a Kansas state manufacturing innovation award. Learn how MachineMetrics
                       helped their metal stamping and fabrication shop to increase efficiency by over 20%!"
						brochureImg={sol_img25}
						buttonText="Download"
					/>
				</div>
			</main>
		</Fragment>
	);
}
export default HMPContainer;
