const elDisplayName = document.getElementById('displayName');

liff.init({
    liffId: "1656239633-vpX4nlk6" // Use own liffId
}).then(() => {
    // Start to use liff's api
    if (!liff.isLoggedIn()){
        liff.login();
        return;
    }
    console.log("LIFF loggedin");

    //Get LIFF User Profile
    liff.getProfile().then(profile =>{
            console.info(profile);
            elDisplayName.textContent = profile.displayName;
    }).catch(err => {
        // if an error occurs
        console.log(err.code, err.message);
    });
}).catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
});
