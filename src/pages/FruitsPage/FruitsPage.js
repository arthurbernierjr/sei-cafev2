import * as fruitsAPI from '../../utilities/fruits-api';
import { useState, useEffect} from "react"
import FruitList from "../../components/FruitList/FruitList"
import UserLogOut from "../../components/UserLogOut/UserLogOut"



export default function FruitsPage({ user, setUser }) {
    const [fruits, setFruits] = useState([])

    const addFruit = (e) => {
        const newFruit = { text: e.target.value, id: Date.now(), completed: false }
        setFruits([newFruit, ...fruits])
        e.target.value = ''
    }



    // const wheresAntony = students.findIndex(student => student.name === 'Antony')
    // students[wheresAntony].grade = 'A+++'
    const completeFruit = (id, e) => {
        const fruitsCopy = [...fruits]
        const indexOfFruit = fruitsCopy.findIndex((i) => i.id === id )
        fruitsCopy[indexOfFruit].completed = !fruitsCopy[indexOfFruit].completed
        setFruits(fruitsCopy)
    }
    const editFruitText = (id, e) => {
     const fruitsCopy = [...fruits]
     const indexOfFruit = fruitsCopy.findIndex((i) => i.id === id)
     fruitsCopy[indexOfFruit].text = e.target.value
     setFruits([...fruitsCopy])
     e.target.value = ""
   }
 
   const deleteFruit = (id) => {
     const fruitsCopy = [...fruits]
     const indexOfFruit = fruitsCopy.findIndex((i) => i.id === id)
     fruitsCopy.splice(indexOfFruit, 1)
     setFruits([...fruitsCopy])
   };

  return (
    <div className="FruitPage">
      <FruitList
     fruits={fruits}
        addFruit={addFruit}
        completeFruit={completeFruit}
        editFruitText={editFruitText}
        deleteFruit={deleteFruit}
      />
      <aside><UserLogOut user={user} setUser={setUser} /></aside>
    </div>
  )
}