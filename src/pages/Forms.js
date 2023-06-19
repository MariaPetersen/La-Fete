import { use } from "i18next"
import { useState } from "react"

const Forms = () => {
    const [name, setName] = useState("")

    return <form>
        <label for="name">Ton nom</label>
        <input type="text" id="name" name="name" placeholder="Ton nom..." value={name} onChange={e => setName(e.target.value)} />
    </form>
}

export default Forms