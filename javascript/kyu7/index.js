import {htmlRoundToNext5, roundToNext5} from './roundToNext5/roundToNext5';

const form = htmlRoundToNext5.firstElementChild;
const formData = new FormData();
const roundNumber = formData.get('roundNumber');

export{
    htmlRoundToNext5,
    roundToNext5,
    roundNumber
}