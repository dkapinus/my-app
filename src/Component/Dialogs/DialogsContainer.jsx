
import { connect } from 'react-redux';
import { addMessageCreator} from '../../Redux/dialogs.reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps =(state) => {
    return {
        dialogsPage:state.dialogsPage
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:(newMessageBody)=> {
            dispatch(addMessageCreator(newMessageBody));
        },
     
    }
}



export  default compose (connect(mapStateToProps,mapDispatchToProps),
withAuthRedirect) (Dialogs);