import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3b8cfaa8bd2345a2a00599b92ed32296', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
