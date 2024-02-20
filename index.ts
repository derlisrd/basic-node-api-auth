import config from './src/config/app'
import app from './src'


app.listen(config.port, ()=>{
    console.log('listen in port',config.port)
})