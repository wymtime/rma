import { connect } from 'react-redux';

import Header from './header';

import { togglePanels } from '../../actions/actions';

const mapStateToProps = (state) => ({
    header: state.header
});

const mapDispatchToProps = (dispatch) => ({
    togglePanels: () => dispatch(togglePanels())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);