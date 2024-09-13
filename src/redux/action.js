export function addUserAction(user) {
    return async function() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        if (response.ok) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error("Ошибка:", error)
        return false
      }
    };
  }
  