import { connect } from 'react-redux';

import Header from './header';

import { toggle } from '../../actions/toggle_actions';

const mapStateToProps = (state) => ({
    data
});

const mapDispatchToProps = (dispatch) => ({
    togglePanel: () => dispatch(toggle())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);