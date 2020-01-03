import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

const run = (): void => {
  app.listen(port, () => {
    console.log(`app is listen on address http://localhost:${port}`)
  });
};

export default {
  ...app,
  run,
};