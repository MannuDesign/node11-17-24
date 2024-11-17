module.exports = reqfilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Provide Age ")
    }

    else if (req.query.age < 18) {
        res.send(" <h1>   Yo Can Not Acces This This Page Please Provide Age </h1> ");
    }


    else {
        next();

    }

}