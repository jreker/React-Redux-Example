import {connect, useSelector} from "react-redux";
import { fetchUser, setUserName } from '../redux/actions/userActions';
import UserViewer from './UserViewer';

const mapStateTouser = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchTouser = dispatch => {
    return {
        setUserName: (name) => dispatch(setUserName(name)),
        fetchUser: () => dispatch(fetchUser())
    }
}
//Connect this dispatch functions directly with the "dump" component UserViewer
export default connect(
    mapStateTouser,
    mapDispatchTouser
)(UserViewer)

