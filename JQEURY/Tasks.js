// You must be add Jquery then use this

api = "https://blokchainology.com/api/api/v1/tasks/"


// Get User Tasks
const data = {
    "user_id": 7
}
$.post(api, data,
    function (data) {
        console.log(data);
    },
);
//End

/* *********************************** */

// Add New Tasks
const data2 = {
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
$.post(api, data2,
    function (data) {
        console.log(data);
    },
);
//End

/* *********************************** */

// Edit Tasks
const data3 = {
    "id" : 60,
    "user_id": 1,
    "title" : "Task 2411",
    "description" : "this is a test description",
    "completed": "false"
}
$.ajax({
    type: "PUT",
    url: api,
    data: data3,
    success: function (response) {
        console.log(response);
    }
});
//End

/* *********************************** */

// Delete Tasks
const data4 = {
    "id" : 60
}
$.ajax({
    type: "DELETE",
    url: api,
    data: data4,
    success: function (response) {
        console.log(response);
    }
});
//End

/* learn more : https://api.jquery.com/category/ajax/ */
