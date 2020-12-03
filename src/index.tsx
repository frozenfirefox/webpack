import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, Name, Animal } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />, 
    document.getElementById("example")
);

ReactDOM.render(
    <Name name="段惠文" />,
    document.getElementById("name")
);

ReactDOM.render(
    <Animal name="dog"></Animal>,
    document.getElementById("animal")
);

