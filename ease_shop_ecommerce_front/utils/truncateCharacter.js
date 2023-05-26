function truncateCharacter(sentence, characterCount) {

    if (typeof sentence != 'string') return false;
    if (characterCount < sentence.length) return sentence.slice(0, characterCount) + '...';
    return sentence
}

export default truncateCharacter;