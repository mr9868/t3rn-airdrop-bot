const T3RN_ABI = [
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        indexed: !0,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: !0,
        name: 'spender',
        type: 'address',
      },
      {
        indexed: !1,
        name: 'value',
        type: 'uint256',
      },
    ],
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        indexed: !0,
        name: 'from',
        type: 'address',
      },
      {
        indexed: !0,
        name: 'to',
        type: 'address',
      },
      {
        indexed: !1,
        name: 'value',
        type: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    name: 'allowance',
    stateMutability: 'view',
    inputs: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'spender',
        type: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    name: 'approve',
    stateMutability: 'nonpayable',
    inputs: [
      {
        name: 'spender',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'bool',
      },
    ],
  },
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [
      {
        name: 'account',
        type: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    name: 'decimals',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      {
        type: 'uint8',
      },
    ],
  },
  {
    type: 'function',
    name: 'name',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      {
        type: 'string',
      },
    ],
  },
  {
    type: 'function',
    name: 'symbol',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      {
        type: 'string',
      },
    ],
  },
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    name: 'transfer',
    stateMutability: 'nonpayable',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'bool',
      },
    ],
  },
  {
    type: 'function',
    name: 'transferFrom',
    stateMutability: 'nonpayable',
    inputs: [
      {
        name: 'sender',
        type: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'bool',
      },
    ],
  },
  {
    CA_ARBT: '0x8D86c3573928CE125f9b2df59918c383aa2B514D',
    CA_BSSP: '0x30A0155082629940d4bd9Cd41D6EF90876a0F1b5',
    CA_BLSS: '0x1D5FD4ed9bDdCCF5A74718B556E9d15743cB26A2',
    CA_OPSP: '0xF221750e52aA080835d2957F2Eed0d5d7dDD8C38',
    RPC_ARBT: 'https://arbitrum-sepolia.infura.io/v3/cf29898319594df799ef861b6dab7198',
    RPC_BSSP: 'https://sepolia.base.org',
    RPC_BLSS: 'https://blast-sepolia.drpc.org',
    RPC_OPSP: 'https://blast-sepolia.blockpi.network/v1/rpc/public',
    ID_ARBT : 421614,
    ID_BSSP : 84532,
    ID_BLSS : 168587773,
    ID_OPSP : 11155420,
  },
];

module.exports = T3RN_ABI;
