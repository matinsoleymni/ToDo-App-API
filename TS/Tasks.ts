// API data's
const api: {
    tasks: string
} = {
    tasks : "https://blokchainology.com/api/api/v1/tasks/" , // not real ( call me to get reals )
}

// Get User Tasks 
const data: {
    user_id: number
} = {
    user_id: 7
}

fetch(api.tasks , { 
    method: "POST",
    body: JSON.stringify(data)
}).then(res => res.json()).then(data => console.log(data))
// END

/* *************************************** */

// Add New Task 
const data2 : {
    user_id: number,
    title : string,
    description : string,
    completed: string // bool - "true" , "false"
} = {
    user_id: 1,
    title : "Task 2411",
    description : "this is a test description",
    completed: "false"
}
fetch(api.tasks , { 
    method: "POST",
    body: JSON.stringify(data2)
}).then(res => res.json()).then(data => console.log(data))
// END

/* *************************************** */

// Add New Task 
const data3: {
    id: number,
    user_id: number,
    title : string,
    description : string,
    completed: string // bool - "true" | "false"
} = {
    id: 24,
    user_id: 1,
    title : "Task 2411",
    description : "this is a test description",
    completed: "false" // "true" | "false"
}

fetch(api.tasks , { 
    method: "PUT",
    body: JSON.stringify(data3)
}).then(res => res.json()).then(data => console.log(data))
// END

/* *************************************** */

// Delete Task
const data4: {
    id: number
} = {
    id: 24,
}
fetch(api.tasks , { 
    method: "DELETE",
    body: JSON.stringify(data4)
}).then(res => res.json()).then(data => console.log(data))
// END

/* *************************************** */
export {};