import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'James Ian Ragasa Solima',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Full Stack Developer',
        subTitle: 'Developing Skills',
        text: 'Here are some projects I have done...'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
      collapsed: true,
    }
  }

  toggleNavbar = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        collapsed: !this.state.collapsed
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Container
            className="p-0"
            fluid={true}>
            <Navbar
              color="light"
              light
              className="border-bottom"
              bg="transparent"
              expand="lg">
              <NavbarBrand className="mr-auto">James Ian R. Solima</NavbarBrand>
              <NavbarToggler
                onClick={this.toggleNavbar}
                className="mr-2 border-0" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="ml-auto" navbar>
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Collapse>
            </Navbar>
            <Route
              path="/"
              exact
              render={() =>
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}></HomePage>}>
            </Route>
            <Route
              path="/about"
              exact
              render={()=>
              <AboutPage
                title={this.state.about.title}></AboutPage>}>
            </Route>
            <Route
              path="/contact"
              exact
              render={()=>
              <ContactPage
                title={this.state.contact.title}></ContactPage>}>
            </Route>
          </Container>
        </Router>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}


Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default App;
