/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Option,
  Serializer,
} from '@lorisleiva/js-core';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataSerializer,
} from '.';

export type TransferArgs = {
  __kind: 'V1';
  amount: bigint;
  authorizationData: Option<AuthorizationData>;
};

export type TransferArgsArgs = {
  __kind: 'V1';
  amount: number | bigint;
  authorizationData: Option<AuthorizationDataArgs>;
};

export function getTransferArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferArgsArgs, TransferArgs> {
  const s = context.serializer;
  return s.dataEnum<TransferArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<TransferArgs, 'V1'>>(
          [
            ['amount', s.u64],
            [
              'authorizationData',
              s.option(getAuthorizationDataSerializer(context)),
            ],
          ],
          'V1'
        ),
      ],
    ],
    undefined,
    'TransferArgs'
  ) as Serializer<TransferArgsArgs, TransferArgs>;
}

// Data Enum Helpers.
export function transferArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<TransferArgsArgs, 'V1'>
): GetDataEnumKind<TransferArgsArgs, 'V1'>;
export function transferArgs<K extends TransferArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<TransferArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isTransferArgs<K extends TransferArgs['__kind']>(
  kind: K,
  value: TransferArgs
): value is TransferArgs & { __kind: K } {
  return value.__kind === kind;
}