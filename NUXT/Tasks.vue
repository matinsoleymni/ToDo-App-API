<template>
    <h1>24 is here</h1>
</template>
<script setup>

const base = "https://blokchainology.com/api/tasks/"

// get user tasks
let sendes = {
    id: 7
}

$fetch( base, {
    method: "POST",
    body: JSON.stringify(sendes)
});
    data.then(res => console.log(res));
// End

/* ****************************************** */

// add new task
const data2 = {
    user_id: 7,
    title: title2,
    description: desc,
    completed: 0
}
$fetch( base , {
    method: "POST",
    body: JSON.stringify(data)
});
//End

/* ****************************************** */

// Delete Task
let data3 = {
    id: 12
}

$fetch( base, {
    method: "DELETE",
    body: JSON.stringify(data3)
});
// End

/* ****************************************** */


// Edit Task
let data4 = {
    id: 24,
    title: "24 is here",
    description: "this is a power 24",
    completed: "true"
}
$fetch(base , {
    method: "PUT",
    body: JSON.stringify(datas)
})
    data.then(res => console.log(res))
// End

/* ****************************************** */

</script>