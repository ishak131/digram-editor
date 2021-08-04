import { setNode, removeNode } from './actions/node'



const mapDispatchToProps = dispatch => {
    return {
        setNode: () => {
            dispatch(setNode())
        },
        removeNode: () => {
            dispatch(removeNode())
        },
    };
};




export default mapDispatchToProps