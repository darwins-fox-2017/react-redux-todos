// ADD NEW
export const newTodo = (input) => {
  fetch('http://localhost:3004/posts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  })
  .then(result => {
    return result.json()
  })
  .then(data => {
    console.log(data)
  })
}

// DELETE DATABASE
export const deleteTodo = (input) => {
  fetch(`http://localhost:3004/posts/${input}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  .then(result => {
    return result.json()
  })
  .then(data => {
    console.log(data)
  })
}
