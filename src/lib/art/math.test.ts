import it   from 'ava';
import path from 'path';
import {
  getCurrentFileHash,
  getInitialFileHash,
} from '@/lib/git';
import {
  coordinate,
  InvalidHashError,
  toHexPointSequence,
  toPointSequence,
} from './math';

const knownFile = path.resolve(process.cwd(), './tsconfig.json');

const validHashes = Object.entries({
  current: getCurrentFileHash(knownFile),
  initial: getInitialFileHash(knownFile),
  lower:   '551a45d948ae04ea44ebec4895fee6f9c83f05f1',
  upper:   'C0A6A0B1A80898B178FAD939D6E31BA378ED10F6',
});

validHashes.forEach(([ key, validHash ]) => {
  it(`gets a hex point sequence (${key})`, (assert) => {
    const sequence = toHexPointSequence(validHash);

    assert.deepEqual(sequence, [
      {
        x: validHash.slice(0, 2),
        y: validHash.slice(2, 4),
      },
      {
        x: validHash.slice(4, 6),
        y: validHash.slice(6, 8),
      },
      {
        x: validHash.slice(8,  10),
        y: validHash.slice(10, 12),
      },
      {
        x: validHash.slice(12, 14),
        y: validHash.slice(14, 16),
      },
      {
        x: validHash.slice(16, 18),
        y: validHash.slice(18, 20),
      },
      {
        x: validHash.slice(20, 22),
        y: validHash.slice(22, 24),
      },
      {
        x: validHash.slice(24, 26),
        y: validHash.slice(26, 28),
      },
      {
        x: validHash.slice(28, 30),
        y: validHash.slice(30, 32),
      },
      {
        x: validHash.slice(32, 34),
        y: validHash.slice(34, 36),
      },
      {
        x: validHash.slice(36, 38),
        y: validHash.slice(38, 40),
      },
    ] as any);
  });
})

const invalidHashes = Object.entries({
  badChars: 'g51a45d948ae04ea44ebec4895fee6f9c83f05f1',
  tooLong:  '551a45d948ae04ea44ebec4895fee6f9c83f05f16',
  tooShort: '551a45d948ae04ea44ebec4895fee6f9c83f05f',
});

invalidHashes.forEach(([ key, invalidHash ]) => {
  it(`throws for an invalid hash (${key})`, (assert) => {
    const error = assert.throws(() => {
      toHexPointSequence(invalidHash);
    }, {
      instanceOf: InvalidHashError,
    });

    assert.is(error.message, (new InvalidHashError(invalidHash)).message);
  });
});

const expectedPointSequences = {
  lower: [
    {
      x: coordinate(85),
      y: coordinate(26),
    },
    {
      x: coordinate(69),
      y: coordinate(217),
    },
    {
      x: coordinate(72),
      y: coordinate(174),
    },
    {
      x: coordinate(4),
      y: coordinate(234),
    },
    {
      x: coordinate(68),
      y: coordinate(235),
    },
    {
      x: coordinate(236),
      y: coordinate(72),
    },
    {
      x: coordinate(149),
      y: coordinate(254),
    },
    {
      x: coordinate(230),
      y: coordinate(249),
    },
    {
      x: coordinate(200),
      y: coordinate(63),
    },
    {
      x: coordinate(5),
      y: coordinate(241),
    }
  ],

  upper: [
    {
      x: coordinate(192),
      y: coordinate(166),
    },
    {
      x: coordinate(160),
      y: coordinate(177),
    },
    {
      x: coordinate(168),
      y: coordinate(8),
    },
    {
      x: coordinate(152),
      y: coordinate(177),
    },
    {
      x: coordinate(120),
      y: coordinate(250),
    },
    {
      x: coordinate(217),
      y: coordinate(57),
    },
    {
      x: coordinate(214),
      y: coordinate(227),
    },
    {
      x: coordinate(27),
      y: coordinate(163),
    },
    {
      x: coordinate(120),
      y: coordinate(237),
    },
    {
      x: coordinate(16),
      y: coordinate(246),
    }
  ],
} as const;

validHashes.forEach(([ key, validHash ]) => {
  it(`gets a numeric point sequence (${key})`, (assert) => {
    const hexPoints     = toHexPointSequence(validHash);
    const pointSequence = toPointSequence(validHash, hexPoints);

    const expected = key in expectedPointSequences
      ? expectedPointSequences[key as keyof typeof expectedPointSequences]
      : null;

    if (expected == null) {
      assert.snapshot(pointSequence);
    }
    else {
      assert.deepEqual(pointSequence, expected);
    }
  });
});
