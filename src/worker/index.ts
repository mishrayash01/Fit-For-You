import { Hono } from "hono";

type Env = Record<string, any>;

const app = new Hono<{ Bindings: Env }>();

export default app;