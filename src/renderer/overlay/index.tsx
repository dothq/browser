import * as ReactDOM from "react-dom";
import React from 'react';
import { Overlay } from "./components/App";

import electron from 'electron';

const app = document.createElement("div")
app.id = "app"

document.body.appendChild(app)

electron.ipcRenderer.send('ignore-mouse-overlay')

ReactDOM.render(<Overlay />, document.getElementById("app"))