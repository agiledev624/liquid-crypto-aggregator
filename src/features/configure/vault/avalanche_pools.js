export const avalanchePools = [
  {
    id: 'png-ust-usdc',
    name: 'UST-USDC LP',
    token: 'UST-USDC LP',
    tokenDescription: 'Pangolin',
    tokenAddress: '0x3c0ECf5F430bbE6B16A8911CB25d898Ef20805cF',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXPangolinV2UST-USDC',
    earnedTokenAddress: '0x541cCcAF6Af423fdBD32468E4B1dff841A6347b3',
    earnContractAddress: '0x541cCcAF6Af423fdBD32468E4B1dff841A6347b3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'png-ust-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Pangolin',
    assets: ['UST', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.pangolin.exchange/#/add/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11',
    buyTokenUrl:
      'https://app.pangolin.exchange/#/swap?inputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E&outputCurrency=0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11',
    createdAt: 1643839674,
  },
  {
    id: 'png-wavax-usdc',
    name: 'USDC-AVAX LP',
    token: 'USDC-AVAX LP',
    tokenDescription: 'Pangolin',
    tokenAddress: '0x0e0100Ab771E9288e0Aa97e11557E6654C3a9665',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXPangolinUSDC-WAVAX',
    earnedTokenAddress: '0xc6Dd1694212153766d83fc6045617781AeF6cEA9',
    earnContractAddress: '0xc6Dd1694212153766d83fc6045617781AeF6cEA9',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'png-wavax-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Pangolin',
    assets: ['USDC', 'AVAX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    addLiquidityUrl:
      'https://app.pangolin.exchange/#/add/AVAX/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    buyTokenUrl:
      'https://app.pangolin.exchange/#/swap?outputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    createdAt: 1647003159,
  },
  {
    id: 'png-tus-wavax',
    name: 'TUS-AVAX LP',
    token: 'TUS-AVAX LP',
    tokenDescription: 'Pangolin',
    tokenAddress: '0xbCEd3B6D759B9CA8Fc7706E46Aa81627b2e9EAE8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXPangolinV2TUS-AVAX',
    earnedTokenAddress: '0xb50b87c75f780A21d34125072c162934a6013ba0',
    earnContractAddress: '0xb50b87c75f780A21d34125072c162934a6013ba0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'png-tus-wavax',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Pangolin',
    assets: ['TUS', 'AVAX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.pangolin.exchange/#/add/AVAX/0xf693248F96Fe03422FEa95aC0aFbBBc4a8FdD172',
    buyTokenUrl:
      'https://app.pangolin.exchange/#/swap?outputCurrency=0xf693248F96Fe03422FEa95aC0aFbBBc4a8FdD172',
    createdAt: 1645972427,
  },
  {
    id: 'curve-avax-av3crv',
    logo: 'polygon/CURVE-3Pool.png',
    name: 'DAI/USDC/USDT',
    token: 'av3CRV',
    tokenDescription: 'Curve',
    tokenAddress: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXCurveAv3CRV',
    earnedTokenAddress: '0x5fAF87e561f97993c55b92816691E141407380F4',
    earnContractAddress: '0x5fAF87e561f97993c55b92816691E141407380F4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-avax-av3crv',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['DAIe', 'USDCe', 'USDTe'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://avax.curve.fi/aave/deposit',
  },
  {
    id: 'joe-ptp-wavax',
    name: 'PTP-AVAX LP',
    token: 'PTP-AVAX JLP',
    tokenDescription: 'Trader Joe',
    tokenAddress: '0xCDFD91eEa657cc2701117fe9711C9a4F61FEED23',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXJoePTP-AVAX',
    earnedTokenAddress: '0x2c4fA3855fA7e236eCF951c3CF6AB86dbE772c02',
    earnContractAddress: '0x2c4fA3855fA7e236eCF951c3CF6AB86dbE772c02',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'joe-ptp-wavax',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trader Joe',
    assets: ['PTP', 'AVAX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://traderjoexyz.com/#/pool/AVAX/0x22d4002028f537599bE9f666d1c4Fa138522f9c8',
    buyTokenUrl:
      'https://www.traderjoexyz.com/#/trade?outputCurrency=0x22d4002028f537599bE9f666d1c4Fa138522f9c8',
  },
  {
    id: 'olive-dai.e-usdt.e',
    name: 'DAI.e-USDT.e LP',
    token: 'DAI.e-USDT.e LP',
    tokenDescription: 'OliveSwap',
    tokenAddress: '0x4758441C1F5d067839776456033f6cd0EB9fb3d3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXOliveDAIe-USDTe',
    earnedTokenAddress: '0x5fAF87e561f97993c55b92816691E141407380F4',
    earnContractAddress: '0x5fAF87e561f97993c55b92816691E141407380F4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'olive-dai.e-usdt.e',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'OliveSwap',
    assets: ['DAIe', 'USDTe'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://avax.olive.cash/add/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70/0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    buyTokenUrl:
      'https://avax.olive.cash/swap?inputCurrency=0xd586E7F844cEa2F87f50152665BCbc2C279D8d70&outputCurrency=0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
  },
  {
    id: 'olive-busd.e-usdt.e',
    name: 'BUSD.e-USDT.e LP',
    token: 'BUSD.e-USDT.e LP',
    tokenDescription: 'OliveSwap',
    tokenAddress: '0x9e4562caC6b91f5154a42e6270F2Ea58A4149b3E',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXOliveBUSDe-USDTe',
    earnedTokenAddress: '0x95fF2E89B8381fE906de6C090F04cc9C6c23F762',
    earnContractAddress: '0x95fF2E89B8381fE906de6C090F04cc9C6c23F762',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'olive-busd.e-usdt.e',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'OliveSwap',
    assets: ['BUSDe', 'USDTe'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://avax.olive.cash/add/0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98/0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    buyTokenUrl:
      'https://avax.olive.cash/swap?inputCurrency=0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98&outputCurrency=0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
  },
  {
    id: 'joe-usdc.e-wavax',
    name: 'USDC.e-AVAX LP',
    token: 'USDC.e-AVAX JLP',
    tokenDescription: 'Trader Joe',
    tokenAddress: '0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXJoeUSDC.e-AVAX',
    earnedTokenAddress: '0x58e879fC6f0B322e9747D7BbeC1c56aC7Ba235cF',
    earnContractAddress: '0x58e879fC6f0B322e9747D7BbeC1c56aC7Ba235cF',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'joe-usdc.e-wavax',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Trader Joe',
    assets: ['USDCe', 'AVAX'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://www.traderjoexyz.com/#/pool/AVAX/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    buyTokenUrl: 'https://www.traderjoexyz.com/#/trade',
  },
  {
    id: 'grape-grape-mim',
    name: 'GRAPE-MIM LP',
    token: 'GRAPE-MIM LP',
    tokenDescription: 'Trader Joe (Grape)',
    tokenAddress: '0xb382247667fe8CA5327cA1Fa4835AE77A9907Bc8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'tokenXGrapeGRAPE-MIM',
    earnedTokenAddress: '0xbC85546Ae3ead99164e565d3d8E2De498084DAA8',
    earnContractAddress: '0xbC85546Ae3ead99164e565d3d8E2De498084DAA8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'grape-grape-mim',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Other',
    assets: ['GRAPE', 'MIM'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MICRO',
      'PLATFORM_ESTABLISHED',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2',
    buyTokenUrl:
      'https://www.traderjoexyz.com/trade?outputCurrency=0x5541D83EFaD1f281571B343977648B75d95cdAC2',
    createdAt: 1643717100,
  },
];
