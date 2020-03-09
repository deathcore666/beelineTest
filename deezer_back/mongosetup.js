db.createUser(
    {
        user: "nomercy",
        pwd: "Leet1337",
        roles: [
            { role: "readWrite", db: "new-dashboard" }
        ]
    });