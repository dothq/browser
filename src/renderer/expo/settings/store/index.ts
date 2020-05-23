import React from "react";

import { observable } from 'mobx';

class Dot {
    @observable
    public selectedSection: 'home' | 'appearance' | 'search' | 'downloads' | 'languages' | 'about' = 'home'

    constructor() {

    }
}

export default new Dot();