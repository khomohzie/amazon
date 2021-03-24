/* eslint-disable import/no-anonymous-default-export */
module.exports = {
    getUsername(rawName) {
        if (rawName) {
            const modName = rawName.split("@")[0].toLowerCase()
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            const username = capitalizeFirstLetter(modName);

            return username;
        } else {
            console.log("email");
        }
    }
}