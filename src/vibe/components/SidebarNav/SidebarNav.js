import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavOverlay from './components/NavOverlay';
import NavSingleItem from './components/NavSingleItem';
import PageAlertContext from '../PageAlert/PageAlertContext';
import { useSelector } from 'react-redux';
export default class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const NavBrand = ({ logo, logoText }) => {
      return (
        <div className="site-logo-bar">
          <NavLink to="/" className="navbar-brand">
            {logo && <img src={logo} alt="" />}
            {logoText && <span className="logo-text">{logoText}</span>}
          </NavLink>
        </div>
      );
    };

    return (
      <PageAlertContext.Consumer>
        {consumer => {
          const hasPageAlertClass = consumer.alert ? 'has-alert' : '';
          return (
            <div>
              <div className={`app-sidebar ${hasPageAlertClass}`}>
                <NavBrand logo={this.props.logo} logoText={this.props.logoText} />
                <nav>
                  <ul id="main-menu">
                    {this.props.nav.map((item, key) => {
                      return <Item item={item} key={key} />;
                    })}
                  </ul>
                </nav>
              </div>
              {this.props.isSidebarCollapsed && <NavOverlay onClick={this.props.toggleSidebar} />}
            </div>
          );
        }}
      </PageAlertContext.Consumer>
    );
  }
}

function Item(item, key) {
  let user = useSelector(state => state.loggedUser);
  if (item.item.admin === user.admin) {
    return <NavSingleItem item={item.item} key={key} />;
  }else{
    return <div></div>
  }
}
