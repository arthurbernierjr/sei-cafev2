import styles from './OrderListItem.scss';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
return (
  <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
    <div>
      <div>Order Id: <span className={styles.Smaller}>{order.orderId}</span></div>
      <div className={styles.Smaller}>{new Date(order.updatedAt).toLocaleDateString()}</div>
    </div>
    <div className={styles.AlignRt}>
      <div>${order.orderTotal.toFixed(2)}</div>
      <div className={styles.Smaller}>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
    </div>
  </div>
);
}