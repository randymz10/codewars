import html from './roundToNext5.html?raw';

const roundToNext5 = (n) => {
    while (n % 5 != 0) {
        n++
    }
    return n;
};

const htmlRoundToNext5 = document.createElement('div');
htmlRoundToNext5.innerHTML = html;

export {
    roundToNext5,
    htmlRoundToNext5
}