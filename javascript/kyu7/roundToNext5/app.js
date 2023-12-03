import html from './roundToNext5.html?raw';
import {roundToNext5} from './roundToNext5';

export const htmlRoundToNext5 = (elementId) => {
    (() => {
        const htmlRoundToNext5 = document.createElement('div');
        htmlRoundToNext5.innerHTML = html;
        document.querySelector(elementId).append(htmlRoundToNext5);

        const hmtlButton = document.querySelector('#enviar');
    })();
}