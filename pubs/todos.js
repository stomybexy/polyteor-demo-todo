SmartPub.smartPublish('todos', function(){

    return {
        selector: {
            $or: [
                {
                    creator: {
                        $exists: false
                    }
                },{
                    $and: [
                        {
                            creator: {
                                $exists: true
                            }                         
                        },
                        {
                            creator: this.userId || Meteor.userId()
                        }
                    ]
                }
            ]  
        },
        sort: {
            label: 1
        },
        coll: Todos
    }
})