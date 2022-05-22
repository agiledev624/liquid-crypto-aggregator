let trimReg = /(^\s*)|(\s*$)/g;

export function isEmpty(key) {
  if (key === undefined || key === '' || key === null) {
    return true;
  }
  if (typeof key === 'string') {
    key = key.replace(trimReg, '');
    return key === '' || key === null || key === 'null' || key === undefined || key === 'undefined';
  } else if (typeof key === 'undefined') {
    return true;
  } else if (typeof key == 'object') {
    for (let i in key) {
      return false;
    }
    return true;
  } else if (typeof key == 'boolean') {
    return false;
  }
}

// Index an array of objects by key
export function indexBy(array, key) {
  return Object.fromEntries(array.map(item => [item[key], item]));
}

export const shouldHideFromHarvest = vaultName => {
  // FIXME: hidden until we implement an 'advanced' toggle
  // return HarvestBlacklistVaultIds.includes(vaultName);
  return true;
};

// const HarvestBlacklistVaultIds = [
//   'bifi-maxi',
//   'fortube-fil',
//   'fortube-atom',
//   'fortube-xtz',
//   'fortube-busd',
//   'fortube-link',
//   'fortube-dot',
//   'fortube-usdt',
//   'fortube-eth',
//   'fortube-btcb',
//   'fry-burger-v2',
// ];
export async function switchChain(chain, successCb, errorCb) {
  const chainId = `0x${(parseInt(chain.chainId)).toString(16)}`
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }],
    })
    successCb && successCb()
  } catch (error) {
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId, ...chain.metamask }],
        });
      } catch (addError) {
        console.error('err', addError)
      }
    } else if (error.code === 4001) {
      errorCb && errorCb(40001)
    }
  }
}