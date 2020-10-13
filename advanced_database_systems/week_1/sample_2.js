const http = require("http");
console.log('started')
const server = http.createServer();
console.log('server created')
const MongoClient = require("mongodb").MongoClient;
console.log('have client')

const url = "mongodb://c";
const dbName = "student";
const client = new MongoClient(url, { useNewUrlParser: true });
console.log('connected')

server.on("request", async (req, res) => {
  console.log('in request')
  const { url, headers } = req;
  try {
    const students = [
      {
        name: { first: "joe", last: "appleton" },
        dob: new Date("August 12, 1982"),
      },
      {
        name: { first: "bill", last: "smith" },
        dob: new Date("August 12, 1982"),
      },
    ];
    console.log('about to connect')
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("students");
    await collection.insertMany(students);
    res.end("request ended");
  } catch (e) {
    console.log(e);
    res.end("could not update");
  }
});

server.listen(8080);
