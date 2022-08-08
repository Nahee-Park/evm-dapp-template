export const connectMetamask = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');

      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    console.log('Connected', accounts[0]);

    return accounts;
  } catch (error) {
    console.log(error);
  }
};
