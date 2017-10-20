const User = {
    getUserList() {

        return new Promise((resolve, reject) => {
            resolve([
                {
                    'id': 1001,
                    'name': 'lz'
                }, {
                    'id': 1002,
                    'name': 'ty'
                }
            ])
        })

    }
}

module.exports = User;