const bcrypt = require("bcrypt");

const encrypt = async (text) => {
    const encryptedPass = await bcrypt.genSalt(12)
                                      .then(salt => bcrypt.hash(text, salt));
    
    return encryptedPass;
}

module.exports = encrypt;