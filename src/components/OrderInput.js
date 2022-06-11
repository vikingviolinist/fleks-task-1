import { ORDER } from '../constants';
import { convertCamelCase } from '../utils';

const OrderInput = ({ disabled, handleOrder }) => (
  <>
    <p className="mt-3">Order of sort</p>
    {[ORDER.ASCENDING, ORDER.DESCENDING].map((order) => (
      <span key={order}>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          id={order}
          name="order"
          value={order}
          onChange={handleOrder}
          disabled={disabled}
        />
        <label htmlFor={order}>{convertCamelCase(order)}</label>
      </span>
    ))}
  </>
);

export default OrderInput;
