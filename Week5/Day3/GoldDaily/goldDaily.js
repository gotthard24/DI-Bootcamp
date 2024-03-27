let words = ['i', 'love', 'big', 'socks']

inframe(words)

function inframe(list) {
    let maxLength = maxWord(list).length;

    for (let i = 0; i < list.length + 2; i++) {
        switch (i) {
            case 0:
            case list.length + 1:
                console.log('*'.repeat(maxLength + 4));
                break;
            default:
                let spaces = Math.floor((maxLength - list[i - 1].length) / 2);
                console.log('* ' + ' '.repeat(spaces) + list[i - 1] + ' '.repeat(spaces) + ' *');
                break;
        }
    }
}

function maxWord(list) {
    let maxWord = '';
    for (let word of words) {
        if (word > maxWord) {
            maxWord = word;
        }
    }
    return maxWord
    
}