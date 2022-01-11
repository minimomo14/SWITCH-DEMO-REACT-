//start with Capital Letter "Switch.tsx"

import React, { useState } from "react";
import "./Switch.css";

function Switch() {
const [switchActive,setSwitchActive] = useState(false);
let addBlue = "";
if (switchActive) {
    addBlue = "blue";
}
    return(
        <div className={"Switch "+ addBlue}>
            
            <h2>Switch</h2>
            {switchActive ?
            <p onClick={() => setSwitchActive(true)}>Turn On</p>:
            <p onClick={() => setSwitchActive(false)}>Turn Off</p>
            }
            <button onClick={() => setSwitchActive(true)}>ON</button>
            <button onClick={() => setSwitchActive(false)}>OFF</button>
            
        </div>
    );
}

export default Switch;