const {MongoClient} = require('mongodb')

const url= "mongodb://127.0.0.1:27017" ;

const connectDB = async () => {
    
        const client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            await client.connect();
            if (client.isConnected()) {
                return client.db("EmployeeForm");
            }
        } catch (err) {
            console.error(err);
        }
    };

    module.exports=connectDB;
