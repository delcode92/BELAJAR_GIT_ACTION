import requests

# print("test  run python 123123")

response = requests.get("http://localhost:3000/get_sample_json")
print(response)
