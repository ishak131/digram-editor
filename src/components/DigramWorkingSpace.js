import React from 'react'
import { connect as reduxConnect } from 'react-redux';
import mapDispatchToProps from '../Redux/mapDispatchToProps';
import mapStateToProps from '../Redux/mapStateToProps';
//import { NodeA } from './NodeA';

export class DigramWorkingSpace extends React.Component {

    constructor() {
        super();
        this.state = {
            arrayOfNodes: [],
            location: {
                x: 0, y: 0
            }
        }
        this.dropId = "DigramWorkingSpace"
        this.Type = "DigramWorkingSpace"
        this.className = "work-space"
        this.baseLine = 0
        this.readyToRelocate = false
    }

    removeNodeOnMouseUp = () => {
        window.addEventListener('mouseup', () => {
            this.props.removeNode()
        })
    }

    getMouseLocation = (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        return { x, y }
    }

    addNodeToMyArrayOfNodesOnMouseUp = () => {
        document.getElementById(this.dropId).addEventListener('mouseup', (e) => {
            const Node = this.props.nodeReducer
            if (!Node)
                return
            const location = this.getMouseLocation(e)
            this.setState({
                arrayOfNodes:
                    [...this.state.arrayOfNodes,
                    {
                        Node, location
                    }]
            })
        })
    }

    setMeReadyToChangeMyLocation = () => {
        this.readyToRelocate = true
    }

    setMyLocation = (location) => {
        this.setState({ location })
    }

    changeMyLlcationOnMouseUp = () => {
    }

    componentDidMount() {
        this.removeNodeOnMouseUp()
        this.addNodeToMyArrayOfNodesOnMouseUp()
        this.setMyLocation(this.props.location)
        this.changeMyLlcationOnMouseUp()
    }

    render() {
        const { x = 'auto', y = 'auto' } = this.state.location
        const { xParent, yParent } = this.props.parentLocation
        console.log(this.Type + " : " + x, " : ", y);
        return (
            <>
                <button onMouseDown={this.setMeReadyToChangeMyLocation} id={this.dropId} className={this.className} style={{ margin: `${y + yParent}px ${this.baseLine + x + xParent}px` }} >
                    {this.Type}
                </button>
                {this.state.arrayOfNodes.map(({ Node, location }, index) => <Node key={location + "-" + index}
                    location={location} parentLocation={{ xParent: x + xParent, yParent: y + yParent }} parentId={this.dropId} parentType={this.Type} />)}
            </>
        )
    }
}


export function connect(Component) {
    return reduxConnect(mapStateToProps, mapDispatchToProps)(Component);
}

export default connect(DigramWorkingSpace)