import { useState } from "react"

export function Home(){
    const [task, setTask] = useState('')

    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="task">Vou trabalhar em:</label>
                    <input id="task"></input>

                    <label htmlFor="minutesAmount">Durante:</label>
                    <input type="number" id="minutesAmount"></input>

                    <span>minutos.</span>
                </div>
                <div>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                </div>
                <button type="submit">Começar</button>
            </form>
        </div>
    )
}