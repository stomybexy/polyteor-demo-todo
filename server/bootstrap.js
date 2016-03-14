Meteor.startup(function() {
    if (!Accounts.findUserByUsername('jo')) {
        Accounts.createUser({
            username: 'jo',
            email: 'jo@gmail.com',
            password: 'test',
            profile: {
                role: 'admin'
            }
        })
    }
    
    accountConfig();
})


function accountConfig() {
    ServiceConfiguration.configurations.upsert(
        { service: "google" },
        {
            $set: {
                clientId: process.env.GOOGLE_CLIENT_ID,
                loginStyle: "popup",
                secret: process.env.GOOGLE_SECRET
            }
        }
    );
}