function passwordScore(password) {
    
    let score = 0;
    if (!password) return 0;

    /*
        Password score is primarily based on length.
        Capitals, numbers and symbols can award extra score,
        but this is diminished the longer the password is,
        as a longer password will result in a higher score.
    */

    if (password.length <= 8) {

        // No score for length

        // Capital
        if (/[A-Z]/.test(password)) score += 1;
        // Number
        if (/\d/.test(password)) score += 1;
        // Symbol
        if (/[!@#$%^&*()_\-+=<>,.?\/[\]{}]/.test(password)) score += 1;

    } else if (password.length <= 15) {

        // Length
        score += 1;
        // Capital
        if (/[A-Z]/.test(password)) score += 1;
        // Number
        if (/\d/.test(password)) score += 1;
        // Symbol
        if (/[!@#$%^&*()_\-+=<>,.?\/[\]{}]/.test(password)) score += 1;

    } else if (password.length <= 25) {

        // Length
        score += 3;
        // Capital or symbol or number (two or more matches)
        if (/(.*([A-Z]|[!@#$%^&*()_\-+=<>,.?\/[\]{}]|\d).*){2,}/.test(password)) score += 2;
            // Capital or Symbol or Number (one match)
            else if (/[A-Z]|[!@#$%^&*()_\-+=<>,.?\/[\]{}]|\d/.test(password)) score += 1;
        
        
    } else {
        // Length
        score += 5;
        // Capital or Symbol or Number
        if (/[A-Z]|[!@#$%^&*()_\-+=<>,.?\/[\]{}]|\d/.test(password)) score += 1;
    }

    return score;

}