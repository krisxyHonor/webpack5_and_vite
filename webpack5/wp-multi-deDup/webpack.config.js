const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'production',
    //entry:'./entry.js',// [] {}
    //entry:['./entry.js','./entryTwo.js'],
    entry:{
        pageOne:{
            import:'./entry.js',
            filename:'./PageOne/[name].js',
            dependOn:'shared'
        },
        pageTwo:{
            import:'./entryTwo.js',
            dependOn:'shared'
        },
        shared:'./shared.js'
    },
    optimization:{
        minimize:true, // default to true under prod. mode
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