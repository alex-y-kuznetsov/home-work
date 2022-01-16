function getResult(actions) {
    let decodedActions = 0;
    let isPower = false;
    let isPowerCheck = false;
    let passwordAttempts = 0;
    let currentPasswordAttempts = 0;
    let clicks = 0;

    for (let j = 0; j < actions.length; j++) {
        if (actions[j] === 'keystrokes') {
            passwordAttempts++;
        };
    };

    for (let i = 0; i < actions.length; i++) {
        if (actions[i] === 'power') {
            isPower = !isPower;
        };

        if (actions[i] === 'keystrokes' && isPower && (currentPasswordAttempts < passwordAttempts || currentPasswordAttempts === 0)) {
            currentPasswordAttempts++;
        };

        if (actions[i] === 'click' && isPower && currentPasswordAttempts === passwordAttempts) {
            clicks++;
            if (clicks === 2) {
                decodedActions++;
                clicks = 0;
            }
        };
    };
    return decodedActions;
}

module.exports = getResult;