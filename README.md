#Intro

There are 3 folders in this repository in the root directory. Each directory would
represent a NPM module within Seismic such as Seismic-Toolkit, Seismic-Workspace, etc.

Each child component is not built individually but instead built within the parent module
by one single webpack component that has all the proper loaders.

##Getting Started

In each of the individual folders (cody-test-child-module, cody-test-child-lazy-module, parent) run this script:

    npm install
    
In the 2 child components, run this script

    npm link
    
In the parent component folder, run this script

    npm run link-children

In the parent component folder run this script to start the example:

    npm start

This will start a webpack dev server on 
<a href="http://localhost:9000">http://localhost:9000</a>
