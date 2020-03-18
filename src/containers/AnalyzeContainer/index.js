import React from 'react';
import sol_img4 from '../../assets/images/solutions/sol_img4.png';
import SolutionOverview from '../../components/SolutionOverview';

function AnalyzeContainer(props) {
	return (
		<SolutionOverview
			titleInfo="Manufacturing Data Analyzer"
			title="ANALYZER"
			heading="Industry Leading Yield and Root Cause Analysis"
			subHeading="Advanced data analytics lets engineers identify the issues that impact yield"
			content1="The ability to analyze production data real-time, and quickly drill down to the root cause
             of the problem sets BISTel apart from its competitors. Whether performing important yield analysis
              or optimizing wafer chamber performance, quickly analyzing data and transforming
               it into actionable intelligence helps manufacturers reduce costs and operate more efficiently."
			content2="BISTel’s advanced data collection capability gathers data from a number of data sources
             (including Big Data) organizing it into a unified structure for analysis. Engineers then choose
              from several innovative analytic options to quickly perform root cause analysis and identify
               the issues that impact yield in minutes and hours versus the weeks it takes others.
                For instance, its innovative new full trace wafer chamber matching application is helping 
                semiconductor customers optimizing fleet performa­­­­­­­­­nce by analyzing variations in chamber
                 performance to ensure the maximum yield from each chamber."
			img={sol_img4}
			alternate="Analyzer"
			challangeHeading="Common Challanges"
			challangeHeadingText1="Traditional data analysis tools is adequate to efficiently pinpoint exact sensor-level
             root cause; multiple domain resources and lots of analysis time are always required"
			challangeHeadingText2="Analyzing and comparing chamber performance is very time consuming,
             especially when there are multiple equipment/chambers with many parameters"
			challangeHeadingText3="When performing chamber matching, I do not always know which the best performing chamber is;
             a lot of work must be done to determine the ‘golden chamber’"
			challangeHeadingText4="Gathering and centralizing relevant data for root cause analysis
             is laborious, especially when there are multiple data sources and relating them is very difficult"
			solHeading="Solutions"
			solsubHeading="Market lwading analytics solution"
			cardTitle1="eDataLyzer"
			cardTitle2="CM"
			cardsubTitle1="eDataLyzer applications quickly pinpoint events that impact yield"
			cardsubTitle2="Chamber Matching (CM) application boost fleet performance by quickly identifying the golden chamber"
			buttonText="Learn More"
		/>
	);
}
export default AnalyzeContainer;
