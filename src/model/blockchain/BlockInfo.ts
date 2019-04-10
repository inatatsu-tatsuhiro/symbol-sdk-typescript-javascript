/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PublicAccount} from '../account/PublicAccount';
import {UInt64} from '../UInt64';
import {NetworkType} from './NetworkType';

/**
 * The block info structure describes basic information of a block.
 */
export class BlockInfo {

    /**
     * @param hash
     * @param generationHash
     * @param totalFee
     * @param numTransactions
     * @param signature
     * @param signer
     * @param networkType
     * @param version
     * @param type
     * @param height
     * @param timestamp
     * @param difficulty
     * @param feeMultiplier
     * @param previousBlockHash
     * @param blockTransactionsHash
     * @param blockReceiptsHash
     * @param blockStateHash
     * @param beneficiaryPublicKey
     */
    constructor(/**
                 * The block hash.
                 */
                public readonly hash: string,
                /**
                 * The generation hash
                 */
                public readonly generationHash: string,
                /**
                 * The sum of all transaction fees included in the block.
                 */
                public readonly totalFee: UInt64,
                /**
                 * The number of transactions included.
                 */
                public readonly numTransactions: number,
                /**
                 * The block signature.
                 * The signature was generated by the signer and can be used to validate that the blockchain
                 * data was not modified by a node.
                 */
                public readonly signature: string,
                /**
                 * The public account of block harvester.
                 */
                public readonly signer: PublicAccount,
                /**
                 * The network type.
                 */
                public readonly networkType: NetworkType,
                /**
                 * The transaction version.
                 */
                public readonly version: number,
                /**
                 * The block type.
                 */
                public readonly type: number,
                /**
                 * The height of which the block was confirmed.
                 * Each block has a unique height. Subsequent blocks differ in height by 1.
                 */
                public readonly height: UInt64,
                /**
                 * The number of seconds elapsed since the creation of the nemesis blockchain.
                 */
                public readonly timestamp: UInt64,
                /**
                 * The POI difficulty to harvest a block.
                 */
                public readonly difficulty: UInt64,
                /**
                 * The feeMultiplier defined by the harvester.
                 */
                public readonly feeMultiplier: number,
                /**
                 * The last block hash.
                 */
                public readonly previousBlockHash: string,
                /**
                 * The block transaction hash.
                 */
                public readonly blockTransactionsHash: string,
                /**
                 * The block receipt hash.
                 */
                public readonly blockReceiptsHash: string,
                /**
                 * The state hash.
                 */
                public readonly stateHash: string,
                /**
                 * The beneficiary public key.
                 */
                public readonly beneficiaryPublicKey?: PublicAccount | undefined) {

    }
}
