export const summation = (num:number)=> { 
    let suma: number = 0;

    for (let i = 0; i <= num; i++) {
        suma += i ;
    }

    return suma;
}