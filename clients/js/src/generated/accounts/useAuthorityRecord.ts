/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  utf8,
} from '@lorisleiva/js-core';
import { TokenMetadataKey, getTokenMetadataKeySerializer } from '../types';

export type UseAuthorityRecord = Account<UseAuthorityRecordAccountData>;

export type UseAuthorityRecordAccountData = {
  key: TokenMetadataKey;
  allowedUses: bigint;
  bump: number;
};

export type UseAuthorityRecordAccountArgs = {
  key: TokenMetadataKey;
  allowedUses: number | bigint;
  bump: number;
};

export async function fetchUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'UseAuthorityRecord');
  return deserializeUseAuthorityRecord(context, maybeAccount);
}

export async function safeFetchUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeUseAuthorityRecord(context, maybeAccount)
    : null;
}

export async function fetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'UseAuthorityRecord');
    return deserializeUseAuthorityRecord(context, maybeAccount);
  });
}

export async function safeFetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeUseAuthorityRecord(context, maybeAccount as RpcAccount)
    );
}

export function getUseAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.get('mplTokenMetadata').publicKey;
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TokenMetadataKey;
      allowedUses: number | bigint;
      bump: number;
    }>([
      ['key', getTokenMetadataKeySerializer(context)],
      ['allowedUses', s.u64],
      ['bump', s.u8],
    ])
    .deserializeUsing<UseAuthorityRecord>((account) =>
      deserializeUseAuthorityRecord(context, account)
    );
}

export function deserializeUseAuthorityRecord(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): UseAuthorityRecord {
  return deserializeAccount(
    rawAccount,
    getUseAuthorityRecordAccountDataSerializer(context)
  );
}

export function getUseAuthorityRecordAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UseAuthorityRecordAccountArgs, UseAuthorityRecordAccountData> {
  const s = context.serializer;
  return s.struct<UseAuthorityRecordAccountData>(
    [
      ['key', getTokenMetadataKeySerializer(context)],
      ['allowedUses', s.u64],
      ['bump', s.u8],
    ],
    'UseAuthorityRecord'
  ) as Serializer<UseAuthorityRecordAccountArgs, UseAuthorityRecordAccountData>;
}

export function getUseAuthorityRecordSize(_context = {}): number {
  return 10;
}

export function findUseAuthorityRecordPda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
    /** The address of the use authority */
    useAuthority: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;
  return context.eddsa.findPda(programId, [
    utf8.serialize('metadata'),
    programId.bytes,
    s.publicKey.serialize(seeds.mint),
    utf8.serialize('user'),
    s.publicKey.serialize(seeds.useAuthority),
  ]);
}
