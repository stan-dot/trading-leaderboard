from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "chain": "eth",
}

result = evm_api.transaction.get_wallet_transactions(
    api_key=api_key,
    params=params,
)

print(result)