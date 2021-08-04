import { NodeB } from "./NodeB";
import { connect } from './DigramWorkingSpace'

class NodeC extends NodeB {
    constructor() {
        super();
        this.dropId = "NodeC-drop"
        this.className = 'C-node'
        this.Type = 'C Type'
    }
}


export default connect(NodeC)
