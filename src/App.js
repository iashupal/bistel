import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

import Error404 from './containers/ErrorContainer';
import Home from './containers/HomeContainer';
import Industry from './containers/IndustryContainer';
import Solutions from './containers/SolutionsContainer';
import Company from './containers/CompanyContainer';
import Resource from './containers/ResourceContainer';
import Semiconductor from './containers/SemiconductorContainer';
import FlatPanel from './containers/FlatpanelContainer';
import Automotive from './containers/AutomotiveContainer';
import Steel from './containers/SteelContainer';
import Energy from './containers/EnergyContainer';
import Battery from './containers/BatteryContainer';
import ElectronicsAssemble from './containers/ElectronicsAssembleContainer';
import Led from './containers/LedContainer';
import Pharmaceutical from './containers/PharmaceuticalContainer';
import Detect from './containers/DetectContainer';
import Analyzer from './containers/AnalyzeContainer';
import Predict from './containers/PredictContainer';
import DFD from './containers/DFDContainer';
import EES from './containers/EESContainer';
import DataLyzer from './containers/DatalyzerContainer';
import CM from './containers/CMContainer';
import HMP from './containers/HMPContainer';
import WQP from './containers/WQPContainer';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/industries" component={Industry} />
				<Route exact path="/solutions" component={Solutions} />
				<Route exact path="/company" component={Company} />
				<Route exact path="/resource" component={Resource} />
				<Route exact path="/industries/semiconductor-electronics" component={Semiconductor} />
				<Route exact path="/industries/flat-panel" component={FlatPanel} />
				<Route exact path="/industries/automotive" component={Automotive} />
				<Route exact path="/industries/steel" component={Steel} />
				<Route exact path="/industries/energy" component={Energy} />
				<Route exact path="/industries/rechargable-battery" component={Battery} />
				<Route exact path="/industries/electronice-assemble-PCB" component={ElectronicsAssemble} />
				<Route exact path="/industries/led" component={Led} />
				<Route exact path="/industries/pharmaceutical" component={Pharmaceutical} />
				<Route exact path="/solutions/detect" component={Detect} />
				<Route exact path="/solutions/analyzer" component={Analyzer} />
				<Route exact path="/solutions/predict" component={Predict} />
				<Route exact path="/solutions/dfd" component={DFD} />
				<Route exact path="/solutions/EES" component={EES} />
				<Route exact path="/solutions/datalyzer" component={DataLyzer} />
				<Route exact path="/solutions/CM" component={CM} />
				<Route exact path="/solutions/HMP" component={HMP} />
				<Route exact path="/solutions/WQP" component={WQP} />
				<Route component={Error404} />
			</Switch>
			<Subscribe />
			<Footer />
		</Router>
	);
}

export default App;
