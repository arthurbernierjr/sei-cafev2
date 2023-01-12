import { useState } from "react"

export default function Fruit({ fruit, completeFruit, editFruitText, deleteFruit }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {fruit.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editFruitText(fruit.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Ripe
        <input
          type="checkbox"
          checked={fruit.completed}
          onChange={(e) => {
            completeFruit(fruit.id, e)
          }}
        />
      </label>
      <button
        checked={fruit.completed}
        onClick={(e) => {
          deleteFruit(fruit.id)
        }}
      >
        Eat the Fruit
      </button>
    </li>
  )
}