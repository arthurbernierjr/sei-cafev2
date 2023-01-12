import styles from './FruitList.module.scss'
import Fruit from '../Fruit/Fruit'

export default function FruitList({
    fruits,
    addFruit,
    completeFruit,
    deleteFruit,
    editFruitText
  }) {
    return (
      <div className={styles.fruitlist}>
        <h1>Create Fruit</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addFruit(e)
          }}
        />
        {fruits.length ? (
          <>
            <h1>Fruit Items</h1>
            <ul>
              {fruits
                .filter((i) => !i.completed)
                .map((fruit) => {
                  return (
                    <Fruit
                      key={fruit.id}
                      fruit={fruit}
                      completeFruit={completeFruit}
                      deleteFruit={deleteFruit}
                      editFruitText={editFruitText}
                    />
                  )
                })}
            </ul>
            <h1>Completed Items </h1>
            <ul className={styles.fruitlist}>
              {fruits
                .filter((i) => i.completed)
                .map((fruit) => {
                  return (
                    <Fruit
                      key={fruit.id}
                      fruit={fruit}
                      completeFruit={completeFruit}
                      deleteFruit={deleteFruit}
                      editFruitText={editFruitText}
                    />
                  )
                })}
            </ul>
          </>
        ) : (
          <h1>No Fruits Added Yet</h1>
        )}
      </div>
    )
  }