const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'production', // treeShaking under prod. mode
    entry:'./entry.js',
    optimization:{
        sideEffects:false
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