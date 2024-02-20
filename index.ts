import config from './src/config/app'
import database from './src/config/database';
import app from './src'


database.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });


app.listen(config.port, ()=>{
    console.log('listen in port',config.port)
})