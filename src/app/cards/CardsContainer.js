import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cardSelected, sockCardData } from './CardsActions'
import Cards from './Cards'

const mapDispatchToProps = dispatch => bindActionCreators({
	cardSelected,
	sockCardData
}, dispatch)

const mapStateToProps = state => ({
	cards: state.cards,
	name: state.enter
})



export default connect(mapStateToProps, mapDispatchToProps)(Cards)