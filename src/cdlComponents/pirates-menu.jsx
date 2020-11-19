import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {injectIntl} from 'react-intl';

class PiratesMenuItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event, value) {
        this.setState({value});
    }

    newProject () {
        this.props.vm.loadProject('.');
    }

    render () {
        const welcome = 'Hello World';

        return (
            <div onClick={this.newProject()}>
                <p>{welcome}</p>
            </div>
        );
    }
}

PiratesMenuItem.propTypes = {
    vm: PropTypes.shape({
        loadProject: PropTypes.func
    })
};

const mapStateToProps = state => ({
    projectId: state.scratchGui.projectState.projectId,
    vm: state.scratchGui.vm
});

export default connect(mapStateToProps)(injectIntl(PiratesMenuItem));
