import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cardSelected, sockCardData } from './GameActions'
import Game from './Game'

const mapDispatchToProps = dispatch => bindActionCreators({
	cardSelected,
	sockCardData
}, dispatch)

const mapStateToProps = state => ({
	cards: state.cards,
	name: state.enter
})



export default connect(mapStateToProps, mapDispatchToProps)(Game)