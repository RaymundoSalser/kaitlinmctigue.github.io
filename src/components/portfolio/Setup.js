import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Subsection from './Subsection';

class Setup extends Component {

    client() {
        if (this.props.client) {
            return(
                <Subsection title={'Client'} text={this.props.client}></Subsection>
            );
        }
    }

    course() {
        if (this.props.course) {
            return(
                <Subsection title={'Course'} text={this.props.course}></Subsection>
            );
        }
    }

    role() {
        if (this.props.role) {
            return(
                <Subsection title={'Role'} text={this.props.role}></Subsection>
            );
        }
    }

    team() {
        if (this.props.team) {
            return(
                <Subsection title={'Team'} text={this.props.team}></Subsection>
            );
        }
    }

    year() {
        if (this.props.team) {
            return(
                <Subsection title={'Year'} text={this.props.year}></Subsection>
            );
        }
    }

    img() {
        if (this.props.img) {
            return(
                <Subsection img={this.props.img}></Subsection>
            );
        }
    }

    before() {
        if (this.props.before) {
            return(
                <Subsection title={'Before'} img={this.props.before}></Subsection>
            );
        }
    }

    after() {
        if (this.props.after) {
            return(
                <Subsection title={'After'} img={this.props.after}></Subsection>
            );
        }
    }

    render() {
        return (
            <div className={'section'}>
                <div className={'row setup'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        {this.client()}
                        {this.course()}
                        {this.year()}
                        {this.role()}
                        {this.team()}
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        {this.img()}
                        {this.before()}
                        {this.after()}
                    </div>
                </div>
            </div>
        );
    }
}

Setup.propTypes = {
    client: PropTypes.string,
    course: PropTypes.string,
    role: PropTypes.string,
    team: PropTypes.string,
    year: PropTypes.number,
    img: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string
};

export default Setup;