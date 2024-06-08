import  { Component } from 'react';
// import LogoNav from '../assets/img/Logomark.svg';
// import MenuBtn from '../assets/img/Menu Button.png';
// import CancelBtn from '../assets/img/Cancel Button.png';
// import HomeBgd from '../assets/img/HomeBackground.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { MenuIcon } from '../assets/Icons/MenuIcon';

class NavBar extends Component {
  state = { clikcked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="HomeDesign">
      
          <div className="DiscTomorText">
            <h2 style={{ marginBottom: '10px' }}>
              Discover Tomorrows Innovations today
            </h2>
            <h4 style={{ fontWeight: '300' }}>
              Welcome To Mechatronics Engineering Excellence!
            </h4>
            <button className="DscvrMoreBtn">Discover More</button>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
