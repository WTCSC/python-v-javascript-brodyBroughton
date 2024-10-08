function generatePassword(length = 12) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return password;
}

module.exports = generatePassword;