import { ENGINE_METHOD_DIGESTS } from "constants";

const remoteURL = "http://localhost:5002"

export default {
  getOne(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(result => result.json())
  },


post(newTask){
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(data => data.json())

},

delete(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    })
    .then (()=> fetch(`${remoteURL}/tasks`))
    .then(result => result.json());
  },


update(editedTask) {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json())
}}
