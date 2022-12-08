import clientPromise from "../../../src/lib/mongodb";

export default async function handler(req: Request & { query: any }, res: any) {
  const client = await clientPromise;
  const db = client.db("test");

  const { genre, date, popularity, vote } = req.query;

  const allGenres =
    genre === "" || genre === "undefined"
      ? [
          {
            $match: {},
          },
        ]
      : genre.split(",").map((item: string) => {
          return {
            $match: {
              "genres.name": item,
            },
          };
        });

  const agg = [
    ...allGenres,
    {
      $sort: {
        ...(date ? { release_date: Number(date) } : {}),
        ...(popularity ? { popularity: Number(popularity) } : {}),
        ...(vote ? { vote_average: Number(vote) } : {}),
      },
    },
  ];

  if (req.method === "GET") {
    const response = await db
      .collection("singlemovies")
      .aggregate(agg)
      .toArray();

    if (!response) {
      return res.json({
        status: 404,
        data: "There was an error",
      });
    }

    res.json({ status: 200, data: response });
  }
}
