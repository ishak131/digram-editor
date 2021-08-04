import {connect } from './DigramWorkingSpace'
import {NodeA} from "./NodeA";

export class NodeB extends NodeA {

    constructor() {
        super();
        this.dropId = "NodeB-drop"
        this.className = 'B-node'
        this.Type = 'B Type'
    }
}

export default connect(NodeB)