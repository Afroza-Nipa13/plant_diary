require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@clusterph.bwaiqag.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPH`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    const plantsCollection = client.db("plantsDB").collection("plants");
    const usersCollection = client.db("plantsDB").collection("users");

    app.get('/plants', async (req, res) => {
      const cursor = plantsCollection.find();
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/myplants/:email', async (req, res) => {
      const email = req.params.email;

      const query = {
        user_email: email,
      }
      const result = await plantsCollection.find(query).toArray()
      res.send(result)

    })

    app.patch('/myplants/:email', async (req, res) => {
      const email = req.params.email;
      console.log(email)
      const filter = {
        email: email
      }

      const updatedPlants = req.body;
      const updatedObject = {
        $set: updatedPlants
      }
      const result = await plantsCollection.updateOne(filter, updatedObject)
      res.send(result)

    })

    app.get('/plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const result = await plantsCollection.findOne(query)
      res.send(result)

    })

    app.get('/plants', async( req, res) =>{
      const sortBy= req.query.sortBy;
      let result;
      if(sortBy === 'care'){
        const sortObject = { easy:1,moderate:2, difficult:3}
        const allPlants = await plantsCollection.find().toArray();
        result = allPlants.sort((a,b)=>{
          const levelA = a.care_level.toLowerCase();
          const levelB = b.care_level.toLowerCase();
          return sortObject[levelA] -sortObject[levelB]
        })


      }else{
        result = await plantsCollection.find().toArray();
      }
      res.send(result)
    })

    app.put('/plants/:id', async(req, res) =>{
      const id = req.params.id;
      const filter = { _id : new ObjectId(id)}
      const options = { upsert: true };
      const docObject = req.body;
      const updateObject = {
        $set:docObject
        
      }
      const result= await plantsCollection.updateOne(filter, updateObject,options)
      res.send(result)
    })



    app.post('/plants', async (req, res) => {
      const newPlants = req.body;
      const result = await plantsCollection.insertOne(newPlants);
      res.send(result)
    })

    app.delete('/plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const result = await plantsCollection.deleteOne(query)
      res.send(result)
    })


    // user related api


    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })


    app.post('/users', async (req, res) => {
      const newUsers = req.body;
      const result = await usersCollection.insertOne(newUsers)
      res.send(result);
    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("You are successfully connected!")
})
app.listen(port, () => {
  console.log(`server is running on port : ${port}`)
})