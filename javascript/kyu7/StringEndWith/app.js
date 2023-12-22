import html from './src/stringEndWith.html?raw';
import stringEndWith from './src/stringEndWith';

export const appStringEndwith = (appId) => {
    (()=>{
        const htmlStringEndWith = document.createElement('div');
        htmlStringEndWith.innerHTML = html;
        document.querySelector(appId).append(htmlStringEndWith);

        const button = document.querySelector('#send');

        htmlButton.addEventListener('click', () => {
            const str = document.querySelector('#str').value;
            const ending = document.querySelector('#ending').value;
            const result = stringEndWith(str, ending);
            const htmlResult = document.querySelector('#result');

            htmlResult.innerHTML = result;
        });
    })();
};