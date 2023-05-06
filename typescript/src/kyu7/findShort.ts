export const findShort = (s: string): number => {
    const words: string[] = s.split(' ');
    let shortWord: number = words[0].length;

    for (let i = 0; i < words.length; i++) {

        if (words[i].length < shortWord) {
            shortWord = words[i].length;
        }
    }
    return shortWord;
}