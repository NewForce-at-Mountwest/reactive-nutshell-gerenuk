const remoteURL = "http://localhost:5002"

export default {
  getOneUserName(userName) {
    return fetch(`${remoteURL}/users/?name=${userName}`).then(result => result.json())
  },
  getAllUserNames() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  deleteUser(id) {
    return fetch(`${remoteURL}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(result => result.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(data => data.json())
},
update(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}