import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { onEnter } from './UsersActions'
import Users from './Users'

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = state => ({
}, state)



export default connect(mapStateToProps, mapDispatchToProps)(Users)