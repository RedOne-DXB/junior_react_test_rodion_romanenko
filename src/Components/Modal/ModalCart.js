import s from './Modal.module.css';

function ModalCart() {
  return (
    <div className={s.column}>
      <div className={s.itemHeader}>
        <div className={s.itemText}>My Bag:</div>
        <div className={s.itemCount}>2 items</div>
      </div>
      <div className={s.itemProduct}>
        <div className={s.gridColumn}>
          <div className={s.columnTitle}>Apollo</div>
          <div className={s.columnLabel}>Running Short</div>
          <div className={s.columnPrice}>$50.00</div>
          <div className={s.columnTabs}>
            <button type="button" className={s.columnTab}>
              S
            </button>
            <button type="button" className={s.columnTab}>
              M
            </button>
          </div>
        </div>
        <div className={s.gridColumn}>
          <div className={s.columnIncrement}>+</div>
          <div className={s.columnCount}>1</div>
          <div className={s.columnDecrement}>-</div>
        </div>
        <div className={s.gridColumn}>
          <div className={s.columnImage}>Imagine there's HUI</div>
        </div>
      </div>
      <div className={s.itemProduct}>
        <div className={s.gridColumn}>
          <div className={s.columnTitle}>Apollo</div>
          <div className={s.columnLabel}>Running Short</div>
          <div className={s.columnPrice}>$50.00</div>
          <div className={s.columnTabs}>
            <button type="button" className={s.columnTab}>
              S
            </button>
            <button type="button" className={s.columnTab}>
              M
            </button>
          </div>
        </div>
        <div className={s.gridColumn}>
          <div className={s.columnIncrement}>+</div>
          <div className={s.columnCount}>1</div>
          <div className={s.columnDecrement}>-</div>
        </div>
        <div className={s.gridColumn}>
          <div className={s.columnImage}>Imagine there's HUI</div>
        </div>
      </div>
      <div className={s.itemTotal}>
        <div className={s.itemText}>Total</div>
        <div className={s.itemTotalAmount}>$100.00</div>
      </div>
      <div className={s.itemButtons}>
        <button type="button" className={s.viewBag}>
          View bag
        </button>
        <button type="button" className={s.checkOut}>
          Check out
        </button>
      </div>
    </div>
  );
}

export default ModalCart;
