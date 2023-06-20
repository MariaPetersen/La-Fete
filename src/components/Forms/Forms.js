import { use } from "i18next"
import { useState } from "react"
import axios from "axios"


const Forms = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        axios.post('http://localhost:8888/api/index.php', { name: name, email: email })
            .then((response) => { console.log("hello") })
            .catch((error) => { console.log(error) })
    }

    return <form>
        <label htmlFor="name">Ton nom</label>
        <input type="text" id="name" name="name" placeholder="Ton nom..." value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="email">Mail</label>
        <input tupe="text" id="email" name="email" placeholder="Ton mail..." value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="submit" value="Envoyer" onClick={handleSubmit} />
    </form>
}

export default Forms