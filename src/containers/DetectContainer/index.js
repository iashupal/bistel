import React from 'react';
import sol_img1 from '../../assets/images/solutions/sol_img1.png';
import SolutionOverview from '../../components/SolutionOverview';

function DetectContainer(props) {
	return (
		<SolutionOverview
			titleInfo="Morning Monitor and Fault Detection"
			title="DETECT"
			heading="First Line of Defense Against Events That Harm Yield"
			subHeading="Full trace data analysis eliminates drifts, glitches, and ramp rate changes with
		 	monitoring all of the data all of the time"
			content1="Real-time fault detection is the first defense against events that impact quality and
            engineering productivity. For almost 20 years, BISTel’s real-time monitoring and
			detection solutions have helped keep equipment and production processes performing at
            their best, helping manufacturers guard against events that are harmful to yield."
			content2="Customers count on BISTel for the most comprehensive set of real-time, fault detection
            solutions on the market. From its industry proven Equipment Engineering Systems (EES) to
            award-winning, AI based, Dynamic Fault Detection (DFD) solutions, BISTel’s market
            leading detection solutions enable manufacturers to maximize plant performance by
            monitoring 100 percent of the data 100 percent of the time."
			img={sol_img1}
			alternate="Fault Detection"
			challangeHeading="Common Challanges"
			challangeHeadingText1="High excursion rate is significantly impacting product quality and production throughput,
            process and equipment issues are not quickly and effectively detected"
			challangeHeadingText2="Creating and maintaining FDC models is laborious and time consuming, even with domain
            expertise"
			challangeHeadingText3="Traditional SPC is not effectively detecting complex issues. Issues are often missed when
 			the fault signal is subtle"
			challangeHeadingText4="I need a comprehensive equipment engineering system to address my various manufacturing
            needs, from equipment monitoring, to recipe management, and Run-to-run control"
			solHeading="Solutions"
			solsubHeading="Comprehensive EES products and award-winning fault detection solution"
			cardTitle1="DFD"
			cardTitle2="EES"
			cardsubTitle1="Next Generation FDC solution using trace analytics"
			cardsubTitle2="Comprehensive solution suite for monitoring, maintaining and optimizing your
            equipment"
			buttonText="Learn More"
		/>
	);
}
export default DetectContainer;
