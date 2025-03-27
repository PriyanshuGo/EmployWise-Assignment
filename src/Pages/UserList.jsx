import { useEffect } from "react"
import axios from "axios"

function UserList() {
    const baseURl = "https://reqres.in"

    useEffect(() => {
      
    

    }, [])
    const Users = async () => {
        try {
            const res = await axios.get(`${baseURl}/api/users?page=1`)
        } catch (error) {
            
        }
    }
    
    return (
    <div>
      
    </div>
  )
}

export default UserList
