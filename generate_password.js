function generatePassword(length = 12) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_"; // Bank used for random password
    let password = "";
    for (let i = 0; i < length; i++) {
        password += alphabet.charAt(Math.floor(Math.random() * alphabet.length)); // Randomly select a character from the alphabet using charAt from Math.random() 
    }
    return password;
}

module.exports = generatePassword;