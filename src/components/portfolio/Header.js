import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spacer from './Spacer';

class Header extends Component {

    problem() {
        if (this.props.problem) {
            return(
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12 section'}>
                        <Title title={'The Problem'} />
                        <p>
                            {this.props.problem}
                        </p>
                    </div>
                </div>
            );
        }
    }

    solution() {
        if (this.props.solution) {
            return(
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12 section'}>
                        <Title title={'The Solution'} />
                        <p className={'section-quote'}>
                            {this.props.solution}
                        </p>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={'header'}>

                {/*head*/}
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12'}>
                        <Link to={'/'} className={'link'}>
                            <FontAwesomeIcon icon={'arrow-left'}/>
                            Back to All Projects
                        </Link>
                        <Spacer/>
                        <div className={'header__title title'}>
                            {this.props.title}
                        </div>
                        <div className={'header__tags'}>
                            {this.props.tags.map((tag) =>
                                <Tag tag={tag} key={tag}></Tag>
                            )}
                        </div>
                    </div>
                </div>

                {/*splash*/}
                <div className={'header__splash'} style={{backgroundImage: 'url(' + this.props.splash + ')'}}></div>

                {/*setup*/}
                {this.problem()}

                {this.solution()}
            </div>
        );
    }
}

Header.propTypes = {
    tags: PropTypes.array,
    title: PropTypes.string,
    splash: PropTypes.string,
    problem: PropTypes.string,
    solution: PropTypes.string
};

export default Header;