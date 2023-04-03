import mongoose from 'npm:mongoose';

mongoose.set( 'strictQuery', false );
const uri = 'mongodb://ecommerce:ecommerce2111@ac-hkkh2tt-shard-00-00.dlicjcg.mongodb.net:27017,ac-hkkh2tt-shard-00-01.dlicjcg.mongodb.net:27017,ac-hkkh2tt-shard-00-02.dlicjcg.mongodb.net:27017/test?replicaSet=atlas-4jyirr-shard-0&ssl=true&authSource=admin';

try {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    await mongoose.connect(uri, options);
    console.log('DB connected')
} catch(err) {
    console.log(String(err))
}
