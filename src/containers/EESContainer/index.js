import React, { Fragment } from 'react';
import sol_img32 from '../../assets/images/solutions/sol_img32.png';
import sol_img37 from '../../assets/images/solutions/sol_img37.png';
import sol_img35 from '../../assets/images/solutions/sol_img35.png';
import sol_img33 from '../../assets/images/solutions/sol_img33.png';
import sol_img34 from '../../assets/images/solutions/sol_img34.png';
import sol_img36 from '../../assets/images/solutions/sol_img36.png';
import sol_img38 from '../../assets/images/solutions/sol_img38.svg';
import sol_img24 from '../../assets/images/solutions/sol_img24.png';
import sol_img25 from '../../assets/images/solutions/sol_img25.png';
import Brochure from '../../components/Brochure';
import SolutionPageHeading from '../../components/SolutionPageHeading';
import './ees.css';

function EESContainer(props) {
	return (
		<Fragment>
			<header className="solutions__hero solutions__grid">
				<div className="solutions__banner-header">
					<p className="solution">Solutions</p>
					<p className="sol_heading">EES Suite</p>
				</div>
				<div className="ees__card">
					<p className="solutions__card-title">
						BISTel’s Equipment Engineering System (EES) solution suite includes a wide range of real-time
						monitoring and control applications to provide
					</p>
					<ul className="ees_points">
						<li>
							<span>•</span> Transformation of large data into actionable manufacturing intelligence
						</li>
						<li>
							<span>•</span> Connectivity between equipment, process and engineers to drive productivity
							higher
						</li>
						<li>
							<span>•</span> Assurance of high yields by guarding against yield impacting events
						</li>
					</ul>
					<ul className="ees_main_points">
						<li>
							<p className="main_pt_para">* Process Equipment</p>
							<p className="main_inner_pt">Cluster tools, In-line tools, measurement tools, etc.</p>
						</li>
						<li>
							<p className="main_pt_para">* External Systems</p>
							<p className="main_inner_pt">
								Manufacturing Execution Systems, Material Control Systems, Defect analysis, Yield
								analysis, etc.
							</p>
						</li>
					</ul>
				</div>
			</header>
			<main>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Real-time Monitoring Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							eFDC
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							eFDC monitors equipment data and identify faults in real-time to maximize production and
							reduce scrap
						</h4>
						<ul className="ees_points">
							<li>
								- Centralized data collection plan capable of collecting data from different sources
							</li>
							<li>- Data quality index available to help reduce false alarms</li>
							<li>- Supports both single variable and multivariatre analysis</li>
							<li>- Graphical equipment Fingerprinting for performance comparison of equipment</li>
							<li>- Interdiction manager for the intire EES platform</li>
							<li>- Real-time SMS/email notification of detected issues</li>
							<li> - Advanced data archiving and summary reporting</li>
						</ul>
						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="Pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img32} alt="eDFC" />
					</div>
				</section>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Real-time Monitoring Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							eSPC
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							eSPC provides a powerful tool in detecting process anomalies to help improve product yield
						</h4>
						<ul className="ees_points">
							<li>- 60+ SPC rules available, including SEMI Standard SPC rules</li>
							<li>
								- Auto creation and tuning of model i.e.: models can automatically adapt to drifting
								parameters
							</li>
							<li>- SPC model simulation against the history data</li>
							<li>- OCAP capabilities include Alarm, LOT Hold, EQP Hold, etc.</li>
							<li> - Intuitive charting to simplify analysis</li>
						</ul>

						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img37} alt="eSPC" />
					</div>
				</section>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Optimizations and Control Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							eR2R
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							eFDC monitors equipment data and identify faults in real-time to maximize production and
							reduce scrap
						</h4>
						<ul className="ees_points">
							<li>- Graphical workflow designer for R2R modeling</li>
							<li>- Rich library of workflow function enabling advanced modeling creation</li>
							<li> - Models can be uploaded to system while in operation </li>
							<li>- Models can be easily shared to allow quick deployment fab-wide</li>
						</ul>

						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img35} alt="eR2R" />
					</div>
				</section>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Optimizations and Control Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							eMPA
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							eMPA improves factory productivity and OEE to maximize ROI
						</h4>
						<ul className="ees_points">
							<li>
								- Intelligently tracks equipment performance to identify time loss during production
							</li>
							<li>- Analysis and interdiction for substrate trace time</li>
							<li>- Effective in all production models regardless of tool types</li>
							<li>
								- Compliant with all SEMI standards, including E10-RAM, E58-ARAMS, E79-OEE, and
								E116-EPTI
							</li>
						</ul>

						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img33} alt="eMPA" />
					</div>
				</section>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Maintenance and Management Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							eRMS
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							eRMS effectively manages process recipes and minimizes operation errors
						</h4>
						<ul className="ees_points">
							<li>
								- Validation of active recipes including parameter set values, equipment constants,
								recipe sequence, etc
							</li>
							<li>
								- Fab white recipe management allowing centralized control and fab-centric integration
							</li>
							<li>- Parameter based recipe control</li>
							<li>- Compliant to SIMI E42 standard</li>
						</ul>
						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img36} alt="eRMS" />
					</div>
				</section>
				<section className="ees_section">
					<div className="ees_content">
						<h4 className="ees_heading">Maintenance and Management Solutions</h4>
						<h1 className="solutions__main-card-title" style={{ color: 'white' }}>
							ePPM
						</h1>
						<h4 className="solutions__main-card-subtitle" style={{ color: 'white', fontSize: '20px' }}>
							ePPM reduces downtime and costs with effective preventative management
						</h4>
						<ul className="ees_points">
							<li>- Parts inventory and utilization management</li>
							<li>
								- Seamless integration with MES and ERP systems allowing job creation and PM scheduling
							</li>
							<li>- Condition based maintenance work order can be generated by FDC alarms</li>
							<li>- Extensive reporting capabilities on equipment maintenance and operation history</li>
						</ul>
						<button className="solutions__button ees_button">
							<img src={sol_img38} alt="pdf" />
							<p>Download Brochure</p>
						</button>
						<img src={sol_img34} alt="ePPM" />
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
export default EESContainer;
