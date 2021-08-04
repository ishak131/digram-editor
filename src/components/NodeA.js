import React from "react";
import { DigramWorkingSpace, connect } from "./DigramWorkingSpace";

//////////////////////////////////////////////////////////////

export class NodeA extends DigramWorkingSpace {

    constructor() {
        super();
        this.dropId = "NodeA-drop-" + Math.random()
        this.className = 'A-node'
        this.Type = 'A Type'
        this.baseLine = 200
    }
    changeMyLlcationOnMouseUp = () => {
        document.getElementById(this.props.parentId).addEventListener('mouseup', (e) => {
            console.log(this.readyToRelocate);
            if (!this.readyToRelocate)
                return
            const location = this.getMouseLocation(e)
            this.setMyLocation(location)
            this.readyToRelocate = false
        })
    }
}

export default connect(NodeA)