import React from 'react';
import { Link } from 'react-router-dom';
import SubMenuIndustry from '../SubMenu/SubMenuIndustry';
import SubMenuSolution from '../SubMenu/SubMenuSolution';
import SubMenuResource from '../SubMenu/SubMenuResource';
import SubMenuNewsRoom from '../SubMenu/SubMenuNewsRoom';
import SubMenuCompany from '../SubMenu/SubMenuCompany';
import './navbar.css';
import logo from '../../assets/images/logo.svg';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: null
		};
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	handleMouseHover = (type) => {
		console.log(type);
		if (type === 'industry') {
			this.setState({ show: type });
		}
		if (type === 'solution') {
			this.setState({ show: type });
		}
		if (type === 'resource') {
			this.setState({ show: type });
		}
		if (type === 'newsroom') {
			this.setState({ show: type });
		}
		if (type === 'company') {
			this.setState({ show: type });
		}
	};
	handleMouseLeave = (type) => {
		if (type === 'industry') {
			this.setState({ show: null });
		}
		if (type === 'solution') {
			this.setState({ show: null });
		}
		if (type === 'resource') {
			this.setState({ show: null });
		}
		if (type === 'newsroom') {
			this.setState({ show: null });
		}
		if (type === 'company') {
			this.setState({ show: null });
		}
	};

	render() {
		return (
			<nav
				className="navbar_root navbar__container"
				onMouseLeave={() => this.handleMouseLeave('industry', 'solution', 'resource', 'newsroom', 'company')}>
				<div className="navbar__left">
					<Link to="/">
						<img className="navbar__logo" src={logo} alt="logo" />
					</Link>
					<div className="navbar_root navbar__subpage-links">
						<Link
							to="/industries"
							onMouseEnter={() => this.handleMouseHover('industry')}
							onMouseLeave={() => this.handleMouseHover('industry')}>
							Industries
						</Link>
						<Link
							to="/solutions"
							onMouseEnter={() => this.handleMouseHover('solution')}
							onMouseLeave={() => this.handleMouseHover('solution')}>
							Solutions
						</Link>
						<Link
							to="/resource"
							onMouseEnter={() => this.handleMouseHover('resource')}
							onMouseLeave={() => this.handleMouseHover('resource')}>
							Resources
						</Link>
						<Link
							to="/newsroom"
							onMouseEnter={() => this.handleMouseHover('newsroom')}
							onMouseLeave={() => this.handleMouseHover('newsroom')}>
							Newsroom
						</Link>
						<Link
							to="/company"
							onMouseEnter={() => this.handleMouseHover('company')}
							onMouseLeave={() => this.handleMouseHover('company')}>
							Company
						</Link>
					</div>
				</div>
				<div className="navbar_root navbar__right">
					<button className="navbar__request-demo-btn">Request Demo</button>
					<div className="navbar_root navbar__icon-btns">
						<i className="material-icons">language</i>
						<i className="material-icons">search</i>
					</div>
				</div>
				{this.state.show === 'industry' ? <SubMenuIndustry /> : null}
				{this.state.show === 'solution' ? <SubMenuSolution /> : null}
				{this.state.show === 'resource' ? <SubMenuResource /> : null}
				{this.state.show === 'newsroom' ? <SubMenuNewsRoom /> : null}
				{this.state.show === 'company' ? <SubMenuCompany /> : null}
			</nav>
		);
	}
}

export default Navbar;
