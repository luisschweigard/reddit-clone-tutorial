import { Request, Response } from "express";
import session from "express-session";
import Redis from "ioredis";
import { createUpdootLoader } from "./utils/createUpdootLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  req: Request & {
    session: session.Session &
      Partial<session.SessionData> & { userId?: number };
  };
  res: Response;
  redis: Redis.Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};
