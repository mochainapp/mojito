# Mojito Interface

An open source interface for Mojito -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [Mo Chain](https://mochain.app/)
- Interface: [Mojito Dex](https://mojito.to/)
- Docs: [Mo Chain Docs](https://modocs.app/)
- Telegram: [Mo Chain](https://t.me/mochain_official)

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing Uniswap Interface V1

The Uniswap Interface supports swapping against, and migrating or removing liquidity from Uniswap V1. However,
if you would like to use Uniswap V1, the Uniswap V1 interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://github.com/Uniswap/uniswap-interface/releases/tag/v1.0.0).
