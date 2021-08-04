import React from 'react';
import { useDispatch } from 'react-redux';
import { setNode } from '../Redux/actions/node';
import NodeA from './NodeA';
import NodeB from './NodeB';
import NodeC from './NodeC';



const PanelDrageNodes = () => {

    const dispatch = useDispatch();

    const setNodeType = (NodeType) => {
        dispatch(setNode(NodeType))

    }

    return (
        <div className="drag-drop-panel">
            <button onMouseDown={() => { setNodeType(NodeA) }} className="A-type" style={{ margin: `${40}px ${30}px` }}>
                type A
            </button>
            <button onMouseDown={() => { setNodeType(NodeB) }} className="B-type" style={{ margin: `${40}px ${30}px` }}>
                type B
            </button>
            <button onMouseDown={() => { setNodeType(NodeC) }} className="C-type" style={{ margin: `${40}px ${30}px` }}>
                type C
            </button>
        </div>
    );
}

export default PanelDrageNodes;
