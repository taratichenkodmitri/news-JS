import App from './components/app/app';
import './global.css';

function print(msg: string) {
    console.log(msg);
}

const app = new App();
app.start();
