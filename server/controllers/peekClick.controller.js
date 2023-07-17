const UserModel = require('../models/PeekUser');

exports.register = (req, res) =>{
    const { username, email, password } = req.body;
    console.log(username, email, password);
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ username, email, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err))
        }).catch(err => {
                res.json(err)
    });
}

exports.login = (req, res)=>{
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ username: user.username, role: user.role },
                            "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie("token", token);
                        return res.json({Status: "Success", role: user.role});
                    } else {
                        return res.json("The password is incorrect");
                    }
                });
            } else {
                return res.json("No records existed");
            }
    });
}