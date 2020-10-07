import React, { Component } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Header, SidebarNav, PageContent, Page } from '../vibe';
import Logo from '../assets/images/vibe-logo.svg';
import nav from '../_nav';
import routes from '../views';
import ContextProviders from '../vibe/components/utilities/ContextProviders';
import handleKeyAccessibility, { handleClickAccessibility } from '../vibe/helpers/handleTabAccessibility';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../actions/';
const MOBILE_SIZE = 992;

export default class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false,
      isMobile: window.innerWidth <= MOBILE_SIZE,
      showChat1: true,
    };
  }

  handleResize = () => {
    if (window.innerWidth <= MOBILE_SIZE) {
      this.setState({ sidebarCollapsed: false, isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  componentDidUpdate(prev) {
    if (this.state.isMobile && prev.location.pathname !== this.props.location.pathname) {
      this.toggleSideCollapse();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('keydown', handleKeyAccessibility);
    document.addEventListener('click', handleClickAccessibility);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleSideCollapse = () => {
    this.setState(prevState => ({ sidebarCollapsed: !prevState.sidebarCollapsed }));
  };

  closeChat = () => {
    this.setState({ showChat1: false });
  };

  render() {
    const { sidebarCollapsed } = this.state;
    const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';
    return (
      <ContextProviders>
        <div className={`app ${sidebarCollapsedClass}`}>
          <div className="app-body">
            <SidebarNav
              nav={nav}
              logo={Logo}
              logoText="VIBE."
              isSidebarCollapsed={sidebarCollapsed}
              toggleSidebar={this.toggleSideCollapse}
              {...this.props}
            />
            <Page>
              <Header
                toggleSidebar={this.toggleSideCollapse}
                isSidebarCollapsed={sidebarCollapsed}
                routes={routes}
                {...this.props}
              >
                <HeaderNav />
              </Header>
              <PageContent>
                <Switch>
                  {routes.map((page, key) => (
                    <Route path={page.path} component={page.component} key={key} />
                  ))}
                  <Redirect from="/" to="/home" />
                </Switch>
              </PageContent>
            </Page>
          </div>
        </div>
      </ContextProviders>
    );
  }
}

function HeaderNav() {
  let user = useSelector(state => state.loggedUser);
  let items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <React.Fragment>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Welcome {user.user}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            onClick={() => {
              dispatch(logout(false));
              history.push('/home');
            }}
          >
            Logout
          </DropdownItem>
          {!user.admin ? <DropdownItem>Items in Cart {items.length}</DropdownItem> : null}
          {!user.admin && items.length > 0
            ? items.map((i, k) => {
                return (
                  <DropdownItem key={k}>
                    {i.name} {i.price}
                  </DropdownItem>
                );
              })
            : null}
        </DropdownMenu>
      </UncontrolledDropdown>
    </React.Fragment>
  );
}
