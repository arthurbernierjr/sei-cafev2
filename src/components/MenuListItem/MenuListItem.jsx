import styles from './MenuListItem.module.scss'

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className={styles.EmojiFlexCtrCtr}>{menuItem.emoji}</div>
      <div className={styles.Name}>{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className={styles.BtnSm} onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}