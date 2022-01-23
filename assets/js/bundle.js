const tokenAddressBNB = '0x170D146C19DBda013318D5AF08B6F3FB8c22AEF1';
const tokenAddressMatic = '0xa267622987b75e1d37ffb8134a1f9ee3435fbb28';
const tokenSymbol = 'ART$';
const tokenDecimals = 18;
const tokenImage = 'https://bink.binaria.art.br/art-symbol.png';

var tabs = new Tabs({
  elem: 'tabs',
  open: 0
});

// Add Bink (ART$) to Wallet list
async function addBinkMatic() {
  try {
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddressMatic,
          symbol: tokenSymbol, 
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log('ART$ adicionado');
    } else {
      console.log('Erro ao adicionar Token');
    }
  } catch (error) {
    console.log(error);
  }
}

