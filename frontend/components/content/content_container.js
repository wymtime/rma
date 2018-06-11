import { connect } from 'react-redux'

import Content from './content'

const mapStateToProps = (state) => ({
    content: state.content
})

export default connect(
    mapStateToProps,
    null
)(Content)
