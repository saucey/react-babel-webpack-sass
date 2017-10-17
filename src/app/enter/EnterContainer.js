import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { onEnter, addUser } from './EnterActions'
import Enter from './Enter'

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser,
  onEnter
}, dispatch)

const mapStateToProps = state => ({
}, state)



export default connect(mapStateToProps, mapDispatchToProps)(Enter)