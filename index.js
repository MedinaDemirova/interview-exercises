/**
 * {"P>E", "E>R", "R>U"} // PERU
 * {"I>F", "W>I", "S>W", "F>T"} // SWIFT
 * {"R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"} // PORTUGAL
 * {"W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"} // SWITZERLAND
 *
 * Given a list of strings in the following format, find the word that can be constructed from them
 * Preconditions & Rules:
 * 1. Every string has length of 3 with format [LETTER > LETTER]
 * 2. There are no repeating strings, all of them are unique, e.g. in firs
 **/

function findWordSecEdition(args) {
    let arr = [];
    let first = '';
    let result = [];
    let currentLastLetter = "";

    for (let i = 0; i < args.length; i++) {
        let lastLetter = args[i].split("")[2];
        arr.push(lastLetter);
    };

    for (let a = 0; a < args.length; a++) {

        let firstLetter = args[a].split("")[0];
        if (!arr.includes(firstLetter)) {
            first = firstLetter;
            currentLastLetter = args[a].split("")[2]
            args.splice(a, 1);
            result.push(first);
            break;
        }
    };

    while (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            let first = args[i].split("")[0];

            if (first === currentLastLetter) {
                result.push(first);
                currentLastLetter = args[i].split("")[2];
                args.splice(i, 1);
                break;
            }
        };
    };

    result.push(currentLastLetter);
    result = result.join("");
    console.log(result);
}


findWordSecEdition(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"])


