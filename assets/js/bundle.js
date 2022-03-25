const tokenAddressMatic = '0xa267622987b75e1d37ffb8134a1f9ee3435fbb28';
const tokenSymbol = 'ART$';
const tokenDecimals = 18;
const tokenImage = 'https://bink.art.br/art-symbol.png';

const dropAddress = "0x3d90c6667d767020fa0a75dd77f763ce5d806556"; // Mainnet
//const dropAddress = "0xbb9aea25534745d8231d977262e41edcc38bba6b"; // Testnet

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
async function faucetBinkMatic() {

  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  const faucetParams = {
    from: account, 
    to: dropAddress,
    data: '0xb46300ec',
    chainId: '0x89', 
  };

  const faucetTxHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [faucetParams],
  });

  console.log(faucetTxHash);
}
