const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            // since react-scripts does not support paths option through webpack 
            // we opt out for craco to fix this problem
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: "./",
                /* tsConfigPath should point to the file where "baseUrl" and "paths" 
                are specified*/
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ]
};