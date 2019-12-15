import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import ReactGA from 'react-ga';


import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowCircleDown, faArrowRight, faArrowLeft, faArrowUp, faEnvelope, faTag } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faSun, faArrowCircleDown, faArrowRight, faArrowLeft, faArrowUp, faEnvelope, faTag);

import { SocialIcon } from 'react-social-icons';

import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import DciBrand from './portfolio/items/DciBrand';
import Environmental from './portfolio/items/Environmental';
import ScrollToTop from './ScrollToTop';
import WomenDrowning from './portfolio/items/WomenDrowning';
import StanleyHotel from './portfolio/items/StanleyHotel';
import PlaySmart from './portfolio/items/PlaySmart';
import THOR from './portfolio/items/THOR';
import InteractivePrinciples from './portfolio/items/InteractivePrinciples';
import UCRE from './portfolio/items/UCRE';

const portfolioItems= [
    {
        path: 'dci-brand',
        comp: DciBrand
    },
    {
        path: 'environmental-design',
        comp: Environmental
    },
    {
        path: 'playsmart',
        comp: PlaySmart
    },
    {
        path: 'thor',
        comp: THOR
    },
    {
        path: 'interactive-principles',
        comp: InteractivePrinciples
    },
    {
        path: 'women-drowning',
        comp: WomenDrowning
    },
    {
        path: 'shining-hotel',
        comp: StanleyHotel
    },
    {
        path: 'art-circuit',
        comp: UCRE
    }
];

function initializeReactGA() {
    ReactGA.initialize('UA-149504089-1');
    ReactGA.pageview('/homepage');
}


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dark: false
        };

        this.changeTheme = this.changeTheme.bind(this);

        initializeReactGA();
    }

    changeTheme() {
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <div>
                <div className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
                    <div className='base'>
                        <div className={'base__page'}>
                            <Router onUpdate={() => window.scrollTo(0, 0)}>
                                <ScrollToTop>
                                    <div>
                                        <Navbar collapseOnSelect className='header'>
                                            <Navbar.Header>
                                                <Navbar.Toggle />
                                            </Navbar.Header>
                                            <Navbar.Collapse>
                                                <Nav pullRight className='header__utility'>
                                                    <NavItem className="theme-toggle header-link" onClick={this.changeTheme}>
                                                        <FontAwesomeIcon icon={this.state.dark ? 'sun' : 'moon'}/>
                                                    </NavItem>
                                                </Nav>
                                                <div className='header__links'>
                                                    <Nav pullRight>
                                                        <LinkContainer to='/' exact>
                                                            <NavItem eventKey={1} className='hidden-sm header-link'>
                                                                Home
                                                            </NavItem>
                                                        </LinkContainer>
                                                        <LinkContainer to={'/resume'}>
                                                            <NavItem eventKey={2} className='header-link'>
                                                                Resume
                                                            </NavItem>
                                                        </LinkContainer>
                                                        <LinkContainer to="/contact">
                                                            <NavItem eventKey={3} className='header-link'>
                                                                About
                                                            </NavItem>
                                                        </LinkContainer>
                                                    </Nav>
                                                </div>
                                            </Navbar.Collapse>
                                            <Link to='/' className="logo">
                                                Katie McTigue
                                            </Link>
                                        </Navbar>

                                        <div className="body">

                                            {/*main*/}
                                            <Route exact path="/" component={Portfolio} />
                                            <Route path="/home" component={Portfolio} routes={portfolioItems} />
                                            <Route path="/resume" component={Resume} />
                                            <Route path="/contact" component={Contact} />

                                            {/*portfolio*/}
                                            {portfolioItems.map(item => (
                                                <Route key={item.path} path={'/portfolio/' + item.path} component={item.comp} />
                                            ))}
                                        </div>
                                    </div>
                                </ScrollToTop>
                            </Router>
                        </div>
                        <div className={'footer'}>
                            <span className={'footer__text'}>
                                I made this website with &#10084; and React. © Copyright 2019.
                            </span>
                            <span className={'footer__divider'}>
                                |
                            </span>
                            <span className={'footer__social'}>
                                <SocialIcon url="mailto:kaitlinmctigue@gmail.com" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.linkedin.com/in/katiemctigue" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://medium.com/@katiemctigue" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://github.com/kaitlinmctigue" style={{ height: 25, width: 25 }} />
                                <SocialIcon url="https://www.instagram.com/katiemctigue/" style={{ height: 25, width: 25 }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}