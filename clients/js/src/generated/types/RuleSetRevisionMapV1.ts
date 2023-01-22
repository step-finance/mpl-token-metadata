/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@lorisleiva/js-core';

export type RuleSetRevisionMapV1 = { ruleSetRevisions: Array<bigint> };

export type RuleSetRevisionMapV1Args = {
  ruleSetRevisions: Array<number | bigint>;
};

export function getRuleSetRevisionMapV1Serializer(
  context: Pick<Context, 'serializer'>
): Serializer<RuleSetRevisionMapV1Args, RuleSetRevisionMapV1> {
  const s = context.serializer;
  return s.struct<RuleSetRevisionMapV1>(
    [['ruleSetRevisions', s.vec(s.u64)]],
    'RuleSetRevisionMapV1'
  ) as Serializer<RuleSetRevisionMapV1Args, RuleSetRevisionMapV1>;
}