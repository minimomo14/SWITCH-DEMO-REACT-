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
            <p>On</p>:
            <p>Off</p>
            }
            {switchActive ?
            <button onClick={() => setSwitchActive(false)}>TURN OFF</button>:
            <button onClick={() => setSwitchActive(true)}>TURN ON</button>
            }
        </div>
    );
}

export default Switch;