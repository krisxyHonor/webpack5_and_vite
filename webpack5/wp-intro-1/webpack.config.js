const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'production',
    devtool:'source-map',
    // mode:'development',
    // devtool:'inline-source-map',
    //entry:'./entry.js',
    entry:{
        main:'./entry.js'
    },
    output:{
        //iife:false,
        clean:true,
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    }
}