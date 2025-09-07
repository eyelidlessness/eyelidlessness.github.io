import type { Plugin } from 'unified';
import type { Data, Node } from 'unist';
import { visit } from 'unist-util-visit';

interface AbbrData extends Data {
	readonly hName: string;
	readonly hProperties: Record<string, unknown>;
}

interface AbbrNode extends Node {
	readonly identifier: string;
	readonly children: readonly Node[];
	readonly data?: AbbrData;
	readonly reference: string;
	readonly type: 'abbr';
}

const isAbbrNode = (node: Node): node is AbbrNode => {
	return node.type === 'abbr';
};

interface TextNode extends Node {
	readonly type: 'text';
	readonly value: string;
}

const isTextNode = (node: Node): node is TextNode => {
	return node.type === 'text';
};

let visited = new Set<string>();

export const resetAbbrContext = (): void => {
	visited = new Set();
};

type MutableNode<T extends Node> = {
	-readonly [K in keyof T]?: T[K];
};

type MutableAbbrNode = MutableNode<AbbrNode>;

export const remarkDistinctAbbr: Plugin = () => {
	return (ast) => {
		visit(ast, isAbbrNode, (node) => {
			const { identifier: abbr } = node;

			if (visited.has(abbr)) {
				for (const key in node) {
					// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
					delete (node as MutableAbbrNode)[key as keyof MutableAbbrNode];
				}

				Object.assign(node, {
					type: 'text',
					value: abbr,
				});
			}

			visited.add(abbr);
		});

		visit(ast, isTextNode, (node) => {
			if (node.value.includes('\u200b')) {
				Object.assign(node, {
					value: node.value.replace(/\u200b/gu, ''),
				});
			}
		});
	};
};
