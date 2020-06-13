import * as ReactDOM from "react-dom";
import React from 'react';
import { App } from "./components/App";

import settings from '../../../resources/icons/settings.png'

const app = document.createElement("div")
app.id = "app"

const favicon = document.createElement("link")
favicon.setAttribute('rel', 'shortcut icon')
favicon.setAttribute('type', 'image/x-icon')
favicon.setAttribute('href', settings)

document.body.appendChild(app)
document.head.appendChild(favicon)


ReactDOM.render(<App />, document.getElementById("app"))