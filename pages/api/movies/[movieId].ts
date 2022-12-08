import { ObjectId } from "mongodb";
import clientPromise from "../../../src/lib/mongodb";

export default async function handler(
  req: Request & { query: { movieId: string } },
  res: any
) {
  const client = await clientPromise;
  const db = client.db("test");

  const movieId = req.query.movieId;

  if (movieId.length !== 24) {
    return res.json({
      status: 400,
      message: "The id string needs to have length of 24 characters",
    });
  }

  if (req.method === "GET" && movieId) {
    const id = new ObjectId(movieId);
    const moviesResponse = await db
      .collection("singlemovies")
      .findOne({ _id: id });

    if (!moviesResponse) {
      return res.json({
        status: 404,
        data: `Can't find the movie with id: ${movieId}`,
      });
    }

    res.json({ status: 200, data: moviesResponse });
  }
}
