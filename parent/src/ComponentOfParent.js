import * as React from "react";
import {ChildComponent} from "cody-test-child-module";

let LazyLoadedComponent = null;

export class ComponentOfParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLazyLoadedComponentLoaded: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    async onButtonClick() {
        LazyLoadedComponent = (await import('cody-test-child-lazy-module')).LazyLoadedComponent;
        this.setState({
            isLazyLoadedComponentLoaded: true
        });
    }

    render() {
        return (
            <div>
                <span>This comes from the parent component</span>
                <ChildComponent/>
                <button onClick={this.onButtonClick}>Lazy Load Next Component</button>
                {
                    this.state.isLazyLoadedComponentLoaded &&
                        <LazyLoadedComponent/>
                }
            </div>
        )
    }
}
