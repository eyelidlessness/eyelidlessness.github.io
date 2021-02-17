import {
  createSchema,
  Validated,
} from 'ts-json-validator';
import { SchemaLike } from 'ts-json-validator/dist/json-schema';

export const UnknownType = createSchema({});

export {
  createSchema as s,
};

export type SchemaType<T extends SchemaLike> = Validated<T>;
