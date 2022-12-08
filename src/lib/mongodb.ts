import { ConnectOptions, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as ConnectOptions;

let client;
let clientPromise: Promise<MongoClient>;
let globalWithMongoClientPromise = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
