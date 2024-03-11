const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'development', // treeShaking under prod. mode
    devtool:'inline-source-map',
    entry:'./entry.js',
    optimization:{
        //providedExports:true,
        //usedExports:true,
        //minimize:true, // default to true under prod. mode
        // minimizer:['...', new plugin()] // JS, CSS, HTML
    },
    output:{
        clean:true,
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    watchOptions:{ignored:[path.resolve(__dirname,'node_modules')]},
    devServer:{
        static:{
            directory:path.join(__dirname,'public'),
        }
    }
}