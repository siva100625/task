function countVowelsConsonants() {
    let sentence = prompt("Enter a sentence:");
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsCount++;
                break;
            default:
                if (char >= 'a' && char <= 'z') {
                    consonantsCount++;
                }
        }
    }

    alert("Vowels: " + vowelsCount + "\nConsonants: " + consonantsCount);
}

countVowelsConsonants();
