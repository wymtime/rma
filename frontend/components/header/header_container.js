import { connect } from 'react-redux'

import Header from './header'

import { toggleContent } from '../../actions/actions'

const mapStateToProps = (state) => ({
    header: state.header
})

const mapDispatchToProps = (dispatch) => ({
    toggleContent: () => dispatch(toggleContent())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
