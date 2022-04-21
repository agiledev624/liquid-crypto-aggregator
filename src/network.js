/* eslint-disable import/first */
export const allNetworks = [
  {
    name: 'BSC',
    asset: 'BSC',
    id: 56,
    hash: '/bsc',
  },
  {
    name: 'FANTOM',
    asset: 'FANTOM',
    id: 250,
    hash: '/fantom',
  },
  // {
  //   name: 'HECO',
  //   asset: 'HECO',
  //   id: 128,
  //   hash: '/heco',
  // },
  {
    name: 'AVALANCHE',
    asset: 'AVALANCHE',
    id: 43114,
    hash: '/avax',
  },
  {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: 137,
    hash: '/polygon',
  },

  // {
  //   name: 'HARMONY',
  //   asset: 'HARMONY',
  //   id: 1666600000,
  //   hash: '/harmony',
  // },
  // {
  //   name: 'ARBITRUM',
  //   asset: 'ARBITRUM',
  //   id: 42161,
  //   hash: '/arbitrum',
  // },
  {
    name: 'CELO',
    asset: 'CELO',
    id: 42220,
    hash: '/celo',
  },
  // {
  //   name: 'MOONRIVER',
  //   asset: 'MOONRIVER',
  //   id: 1285,
  //   hash: '/moonriver',
  // },
  {
    name: 'CRONOS',
    asset: 'CRONOS',
    id: 25,
    hash: '/cronos',
  },
  // {
  //   name: 'FUSE',
  //   asset: 'FUSE Network',
  //   id: 122,
  //   hash: '/fuse',
  // },
  {
    name: 'METIS',
    asset: 'Andromeda',
    id: 1088,
    hash: '/metis',
  },
  {
    name: 'MOONBEAM',
    asset: 'MOONBEAM',
    id: 1284,
    hash: '/moonbeam',
  },
  {
    name: 'ETHEREUM',
    asset: 'ETH',
    id: 1,
    hash: '/ethereum',
  },
];

const network = allNetworks.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  //default network to bsc (which is first of 9)
  window.location.hash = allNetworks[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
