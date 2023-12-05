import html from './src/roundToNext5.html?raw';
import roundToNext5 from './src/roundToNext5';

export const htmlRoundToNext5 = (elementId) => {
    (() => {
        const htmlRoundToNext5 = document.createElement('div');
        htmlRoundToNext5.innerHTML = html;
        document.querySelector(elementId).append(htmlRoundToNext5);

        const htmlButton = document.querySelector('#enviar');
        
        
        htmlButton.addEventListener('click', () => {
            const inputValue = document.querySelector('#roundNumber').value;
            const newValue = roundToNext5(inputValue);
            const htmlResult = document.querySelector('span');
            htmlResult.innerHTML = newValue;
        });
    })();
}