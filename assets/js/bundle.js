const tokenAddress = '0x170D146C19DBda013318D5AF08B6F3FB8c22AEF1';
const tokenSymbol = 'ART$';
const tokenDecimals = 18;
const tokenImage = 'https://bink.binaria.art.br/art-symbol.png';


// Add Bink (ART$) to Wallet list
async function addBink() {
  try {
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
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
