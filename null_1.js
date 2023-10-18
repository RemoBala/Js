const address = '0xYourEthereumAddress'; 

web3.eth.getBalance(address, (error, balance) => {
    if (!error) {
        const balanceInEther = web3.utils.fromWei(balance, 'ether');
        console.log(`Balance for ${address}: ${balanceInEther} Ether`);
    } else {
        console.error(`Error getting balance: ${error}`);
    }
});
