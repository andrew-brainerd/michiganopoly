import { connect } from 'react-redux';
import { navTo } from '../../actions/routing';
import Menu from './Menu';

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path))
});

export default connect(null, mapDispatchToProps)(Menu);
