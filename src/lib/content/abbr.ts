import { Plugin } from 'unified';
import {
  Data,
  Node,
} from 'unist';
import visit      from 'unist-util-visit';

interface AbbrData extends Data {
  readonly hName:       string;
  readonly hProperties: Record<string, unknown>;
}

interface AbbrNode extends Node {
  readonly abbr:      string;
  readonly children:  readonly Node[];
  readonly data?:     AbbrData;
  readonly reference: string;
  readonly type:      'abbr';
}

let visited = new Set<string>();

export const resetAbbrContext = () => {
  visited = new Set();
};

export const remarkDistinctAbbr: Plugin = () => {
  return (
    (ast) => {
      visit<AbbrNode>(ast, 'abbr', (node) => {
        const { abbr } = node;

        if (visited.has(abbr)) {
          delete (node as Node).abbr;
          delete (node as Node).children;
          delete (node as Node).data;
          delete (node as Node).reference;

          Object.assign(node, {
            type:  'text',
            value: abbr,
          });
        }

        visited.add(abbr);
      });
    }
  );
};
