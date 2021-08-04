import React from "react";
import DigramWorkingSpace from "./DigramWorkingSpace";
import NodeA from "./NodeA";
import PanelDrageNodes from "./PanelDrageNodes";

export default function Main() {
    return (
        <div id="main" className="main">
            <PanelDrageNodes />
            <DigramWorkingSpace parentLocation={{ xParent: 0, yParent: 0 }} location={{ x: 0, y: 0 }} />
        </div>
    )
}