import { Hono } from "hono";

// This line fixes the error by telling TypeScript what "Env" is
type Env = Record<string, any>;

const app = new Hono<{ Bindings: Env }>();

export default app;