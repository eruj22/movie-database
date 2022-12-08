import clientPromise from "../../../src/lib/mongodb";

export default async function handler(
  req: Request & {
    body: {
      name: string;
      email: string;
      watchlist?: string;
    };
  },
  res: any
) {
  const client = await clientPromise;
  const db = client.db("test");

  if (req.method === "POST") {
    if (!req.body.name || !req.body.email) {
      return res.json({
        status: 400,
        message: "You need to include name and email of the user",
      });
    }

    const user = await db
      .collection("users")
      .find({ name: req.body?.name, email: req.body?.email })
      .toArray();

    if (req.body.watchlist) {
      const movie = req.body.watchlist;
      const userWatchlist: string[] = user[0].watchlist;

      let watchlistArr;
      if (userWatchlist === undefined) {
        watchlistArr = [movie];
      } else if (userWatchlist.find((item) => item === movie)) {
        watchlistArr = userWatchlist.filter((item) => item !== movie);
      } else {
        watchlistArr = [...userWatchlist, movie];
      }

      const response = await db
        .collection("users")
        .updateOne(
          { name: req.body.name, email: req.body.email },
          { $set: { watchlist: watchlistArr } }
        );

      if (response.acknowledged === true) {
        return res.json({ status: 200, message: "successfully modified" });
      } else {
        return res.json({
          status: 400,
          message: "there was an error when modifying a watchlist",
        });
      }
    }

    res.json({ status: 400, message: "Something went wrong" });
  }
}
