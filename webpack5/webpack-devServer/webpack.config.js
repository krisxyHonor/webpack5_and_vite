const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'development',
    devtool:'inline-source-map',
    entry:{
        main:'./entry.js'
    },
    output:{
        iife:true,
        clean:true,
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    watchOptions:{
        //ignored:/node_modules/
        //ignored:[path.resolve(__dirname,'node_modules')]
        ignored:['**/node_modules']
    },
    devServer:{
        port:8080,hot:true,
        watchFiles:['**/src/backend/*']
    }
}