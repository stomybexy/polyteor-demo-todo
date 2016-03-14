Meteor.startup(function(){
    if(!Accounts.findUserByUsername('jo')){
        Accounts.createUser({
            username: 'jo',
            email: 'jo@gmail.com',
            password: 'test',
            profile: {
                role: 'admin'
            }
        })
    }
})