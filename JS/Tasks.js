// API data's
const api = {
    tasks : "https://domin.com/api/tasks" , // not real ( call me to get reals )
    tasks : "https://domin.com/api/users" , // not real ( call me to get reals )
}

// Get User Tasks 
const data = {
    user_id: 1
}
let result  = fetch(api.tasks , { 
    method: "POST",
    body: JSON.stringify(data)
}) 
result.then(res => console.log(res))
// END

/* *************************************** */

// Add New Task 
const data2 = {
    user_id: 1,
    title : "Task 2411",
    description : "this is a test description",
    completed: "false"
}
let result2  = fetch(api.tasks , { 
    method: "POST",
    body: JSON.stringify(data2)
}) 
result2.then(res => console.log(res))
// END

/* *************************************** */

// Add New Task 
const data3 = {
    id: 24,
    user_id: 1,
    title : "Task 2411",
    description : "this is a test description",
    completed: "false" // "true" | "false"
}
let result3  = fetch(api.tasks , { 
    method: "PUT",
    body: JSON.stringify(data3)
}) 
result3.then(res => console.log(res))
// END

/* *************************************** */

// Delete Task
const data4 = {
    id: 24,
}
let result4  = fetch(api.tasks , { 
    method: "DELETE",
    body: JSON.stringify(data4)
}) 
result4.then(res => console.log(res))
// END

/* *************************************** */