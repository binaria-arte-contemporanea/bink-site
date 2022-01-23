const tokenAddressMatic = '0xa267622987b75e1d37ffb8134a1f9ee3435fbb28';
const tokenSymbol = 'ART$';
const tokenDecimals = 18;
const tokenImage = 'https://bink.binaria.art.br/art-symbol.png';

const dropAddress = "0x3d90c6667d767020fa0a75dd77f763ce5d806556";

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
  let faucetABI = [
    {"inputs":[{"internalType":"address","name":"_smtAddress","type":"address"},{"internalType":"address","name":"_ownerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"send","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setFaucetDripAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}
  ]
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    let walletAddress = account;
    let contractDropArtsTo = new web3.eth.Contract(faucetABI, dropAddress);  
    contractDropArtsTo.methods.send().send({ from: walletAddress }).then(console.log);
  }
}
