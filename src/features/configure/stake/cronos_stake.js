import { govPoolABI } from '../abi';

export const cronosStakePools = [
  {
    id: 'bifi-cronos',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xe6801928061CDbE32AC5AD0634427E140EFd05F9',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'CRO',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    earnContractAddress: '0x107Dbf9c9C0EF2Df114159e5C7DC2baf7C444cFF',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WCRO',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many sidechains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Cronos, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, CRO dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the CRO you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_vvs-cro-btc-liquidus',
    name: 'Liquidus',
    assets: ['CRO', 'WBTC'],
    token: 'mooVvsCRO-BTC',
    tokenDecimals: 18,
    tokenAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    tokenOracle: 'lps',
    tokenOracleId: 'vvs-cro-btc',
    earnedToken: 'LIQ',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
    earnContractAddress: '0xF424488CD9213b6Fd83F63C2BdCA8B0492b2a9a5',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'LIQ',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1641545215,
    partners: [
      {
        logo: 'stake/liquidus/logo.png',
        background: 'stake/liquidus/bg.png',
        text: 'Liquidus is a practical tool that will allow you to easily stake your crypto assets on leading DeFi platforms. We’ll bring the rapidly expanding Decentralized Finance (DeFi) ecosystem to the masses, breaking complicated processes down through easy-to-use, simplistic interfaces. We’re here to change how people think about DeFi and our much-anticipated web and mobile application is planned for launch in Q1 of 2022.',
        website: 'https://farm.liquidus.finance/',
        social: {
          telegram: 'https://t.me/liquidusfinance',
          twitter: 'https://twitter.com/LiquidusFinance',
        },
      },
    ],
  },
];
