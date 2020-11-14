const app = require('./index');
const PORT = 5000;
// const {
//     db,
//     models: { Product },
//   } = require('./db');

const init = async () => {
//    db.sync().then(() => {
    app.listen(PORT, () =>
      console.log(`
        listening on port: ${PORT}
        listening on http://localhost:${PORT}
        listening on http://127.0.0.1:${PORT}
        `)
    );
//   });
}

init()