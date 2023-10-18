
if (typeof window.ethereum !== 'undefined') {
    const ethereum = window.ethereum;

    ethereum
        .request({ method: 'eth_chainId' })
        .then((chainId) => {
            if (chainId === '0x61') { 
            
                console.log('Connected to BSC Testnet');
            } else {
           
                const chainIdToSwitchTo = '0x61'; 
                ethereum
                    .request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: chainIdToSwitchTo,
                                chainName: 'Binance Smart Chain Testnet',
                                rpcUrls: ['https://data-seed.binance.org/'],
                                nativeCurrency: { name: 'BNB', symbol: 'bnb', decimals: 18 },
                                blockExplorerUrls: ['https://testnet.bscscan.com/'],
                            },
                        ],
                    })
                    .then(() => {
                        console.log('Switched to BSC Testnet');
                    })
                    .catch((error) => {
                        console.error('Failed to switch to BSC Testnet:', error);
                    });
            }
        })
        .catch((error) => {
            console.error('Error checking chain ID:', error);
        });
} else {
    console.error('MetaMask is not available. Please install it.');
}
