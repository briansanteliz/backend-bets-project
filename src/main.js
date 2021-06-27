const { app } = require('./app');
const DB = require('./config/database');
app.listen(app.get('puerto'), async () => {
  console.log(`Servidor en el puerto: ${app.get('puerto')}`);
  try {
      /* FORZAR BD INVESTIGAR */
    await DB.sync().force();
    console.log('Base de datos conectada correctamente');
  } catch (error) {
    console.log('Algo salió mal con la DB', error);
  }
});
