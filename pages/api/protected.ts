import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req: any, res: any) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return res.send(session);
  }

  return res.status(401).json({
    error: "Not authenticated",
  });
};

export default handler;
