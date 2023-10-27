
const init: string = 'https://platform.arkhamintelligence.com/explorer/address/';

export function getArkhamAddress(wallet: string): string{

  return init.concat(wallet);
}
