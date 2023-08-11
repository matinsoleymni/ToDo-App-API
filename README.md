# 24
## This is a ToDo App API With <b>PHP</b> & <b>MySQL</b> 


| Scope     | Skills                                                                           |
|:---------:|:--------------------------------------------------------------------------------:|
| Tools     | <img src="https://skillicons.dev/icons?i=github,vscode,git,md,postman&perline=5">|
| API  | <img src="https://skillicons.dev/icons?i=php,mysql&perline=2">                   |

 
<hr>

| Scope     | Skills                                                                           |
|:---------:|:--------------------------------------------------------------------------------:|
| use     | <img src="https://skillicons.dev/icons?i=php,js,ts,py,vue&perline=5">|

 
<hr>

<br>

# Documents

## endpoint
<ul>
    <li><a href="#">https://domin/api/v1/tasks</a></li>
    <li><a href="#">https://domin/api/v1/users</a></li>
</ul>
<p>Call me to get real EndPoints <a href="mailto:matinsoleymni@gmail.com">Email me</a> OR <a href="https://t.me/matinsoleymni">Telegram me</a></p>

<hr>

### Tasks EndPoint Setting

<p>Get User Tasks With API: </p>
<ul>
    <li>Method : POST</li>
    <li>Parameters : json</li>
</ul>

Example:
```JSON
{
    "user_id": 1
}
```
<br><br>

**Send this json to EndPoint `Tasks` With `POST` Method**
<br><br>
{Action: `Get User All Tasks`}<br><br>

<hr><br><br>

<p>Add New Task With API: </p>
<ul>
    <li>Method : POST</li>
    <li>Parameters : json</li>
</ul>

Example:
```JSON
{
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
```
<br><br>

**Send this json to EndPoint `Tasks` With `POST` Method**
<br><br>
{Action: `Add New Task With Your Data send`}<br><br>

<hr><br><br>

<p>Edit Task With API: </p>
<ul>
    <li>Method : PUT</li>
    <li>Parameters : json</li>
</ul>

Example:
```JSON
{
    "id": 24 ,
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
```
<br><br>

**Send this json to EndPoint `Tasks` With `POST` Method**
<br><br>
{Action: `Edit Task To New Data`}<br><br>

<hr><br><br>

<p>Delete Task With API: </p>
<ul>
    <li>Method : DELETE</li>
    <li>Parameters : json</li>
</ul>

Example:
```JSON
{
  "id": 1
}
```

"id" => `Task id for delete this id` | `numeric` <br><br>
**Send this json to EndPoint `Tasks` With `DELETE` Method**<br><br>

{Action: `Delete Task where id send`}<br><br><br>

<hr><hr> <br>

### Users EndPoint Setting

<p>Add New User With API: </p>
<ul>
    <li>Method : POST</li>
    <li>Parameters : ?token=YOUR_API_TOKEN || json</li>
</ul>

Example:
```JSON
{
  "name": "matin soleymani",
  "email": "test@test@gmail.com",
  "username" : "matinsoleymni",
  "password": "654c5s6d4cfsdf"
}
```

!! Created_at Automatically Add now time !!<br><br>
**Send this json to EndPoint `Users` With `POST` Method**
<br><br>
{Action: `Add New User With Your Data send`}<br><br><br>


<p>Edit User With API: </p>
<ul>
    <li>Method : POST</li>
    <li>Parameters : ?token=YOUR_API_TOKEN || json</li>
</ul>

Example:
```JSON
{
  "id": 1 ,
  "name": "matin soleymani",
  "email": "test@test@gmail.com",
  "username" : "matinsoleymni",
  "password": "654c5s6d4cfsdf"
}
```

!! Created_at Automatically Add now time !!<br><br>
**Send this json to EndPoint `Users` With `POST` Method**
<br><br>
{Action: `Add New User With Your Data send`}<br><br><br>


<p>Find User With API: </p>
<ul>
    <li>Method : POST</li>
    <li>Parameters : ?token=YOUR_API_TOKEN || json</li>
</ul>

Example:
```JSON
{
  "username" : "matinsoleymni",
  "password": "654c5s6d4cfsdf"
}
```

!! If status code is = 200 (user login) else status code is = 404 (user not found) !!<br><br>
**Send this json to EndPoint `Users` With `POST` Method**
<br><br>
{Action: `Find user for login Your Data send`}<br><br><br>


<p>Delete User With API: </p>
<ul>
    <li>Method : DELETE</li>
    <li>Parameters : ?token=YOUR_API_TOKEN || json</li>
</ul>

Example:
```JSON
{
  "id": 1
}
```

"id" => `User id for delete this id` | `numeric` <br><br>
**Send this json to EndPoint `users` With `DELETE` Method**<br><br>

{Action: `Delete Post where id send`}<br><br><br>


<hr>    