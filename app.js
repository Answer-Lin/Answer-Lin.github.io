liff.init({
    liffId: "1656239633-vpX4nlk6" // Use own liffId
}).then(() => {
    // Start to use liff's api
    //Get LIFF User Profile
    liff.getProfile().then(profile =>{
        document.getElementById('displayName').innerHTML = profile.displayName;
    }).catch(err => {
        // if an error occurs
    });
}).catch((err) => {
    // Error happens during initialization
});