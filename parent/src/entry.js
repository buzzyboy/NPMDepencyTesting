import ReactDOM from 'react-dom';
import * as React from 'react';
import {ChildComponent} from "cody-test-child-module";
import {ComponentOfParent} from "./ComponentOfParent";

class AppInitializer {
    initialize() {
        const mainContainerEl = document.getElementById('mainContainer');
        ReactDOM.render(<div><ComponentOfParent/></div>, mainContainerEl);
    }
}

window.initializeApp = () => {
    const initializer = new AppInitializer();
    initializer.initialize();
};

window.lazyLoadNextComponent = async () => {
};
