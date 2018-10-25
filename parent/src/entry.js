import {ChildModuleOne} from "cody-test-child-module";

class AppInitializer {
    initialize() {
        console.log('App initialized');
    }
}

window.initializeApp = () => {
    const initializer = new AppInitializer();
    initializer.initialize();
};

window.lazyLoadNextComponent = async () => {
};
