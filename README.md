Simple HSD Wrapper
==

A small wrapper around the Handshake full node that makes it a little easier to configure and run an SPV wallet.

## Usage

```bash
# 1. Install all dependencies
npm install

# 2. Copy the default config. Change the api keys in hsd.conf after.
npm run config

# 3. In a screen/pane/terminal, run the spv node.
npm run spv

# 4. Generate a wallet address to receive funds.
$(npm bin)/hsw-cli --config=./hsd.conf --account=default address

# 5. Send HNS to an address
$(npm bin)/hsw-cli --config=./hsd.conf send --address=ADDRESS --value=AMOUNT

# 6. Check your HNS balance
$(npm bin)/hsw-cli --config=./hsd.conf get

# 7. View pending wallet transactions
$(npm bin)/hsw-cli --config=./hsd.conf pending
```

For more information on using Handshake's default wallet, check out the official API docs: https://handshake-org.github.io/api-docs/#wallet

## License

MIT License
