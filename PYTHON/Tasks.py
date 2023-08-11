import requests 

api = "https://blokchainology.com/api/tasks/"
# get user data
data = {
    "user_id": 7
}
result = requests.post(api , json=data)
print(result.text)

# /* ***************************** */

# add new task 
data2 = {
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
result = requests.post(api , json=data2)
print(result.text)

# /* ***************************** */

# Edit new task 
data3 = {
    "id" : 60,
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
result = requests.put(api, json=data3)
print(result.text)

# /* ***************************** */

# delete new task 
data4 = {
    "id" : 60
}
result = requests.delete( api , json=data4)
print(result.text)