import { GraphbackContext } from 'graphback';
import { Request, Response } from 'express';

export enum Adapter {
  Express = 'express',
  Fastify = 'fastify'
}

export interface GraphqlCtx extends GraphbackContext {
  req: Request;
  res: Response;
}

export interface HashMap<T = any> {
  [key: string]: T;
}

export type Map = HashMap<Map>;