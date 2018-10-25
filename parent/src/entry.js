import {ChildModuleOne} from "cody-test-child-module";

class AppInitializer {
    initialize() {
        new ChildModuleOne();
        console.log('App initialized');
    }
}

window.initializeApp = () => {
    const initializer = new AppInitializer();
    initializer.initialize();
};

window.lazyLoadNextComponent = async () => {
    const LazyModuleOne = await import('cody-test-child-lazy-module');
    console.log('LazyLoadModuleOne', LazyModuleOne);
    new LazyModuleOne.LazyModuleOne();
};
