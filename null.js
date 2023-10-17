//metamask connection
function connectWithMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        const ethereum = window.ethereum;

        ethereum.request({ method: 'eth_requestAccounts' })
            .then(() => {
                console.log('Connected to MetaMask');
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        console.log('MetaMask is not available. Please install it.');
    }
}




