import { USER } from '../constants';
import { convertCamelCase } from '../utils';

const SortInput = ({ handleSort }) => (
  <>
    <p className="mt-3">Sort by</p>
    {[USER.FIRSTNAME, USER.LASTNAME, USER.BIRTHDAY].map((key) => (
      <span key={key}>
        <input
          className="ml-4 mr-1 cursor-pointer"
          type="radio"
          name="key"
          id={key}
          value={key}
          onChange={handleSort}
        />
        <label htmlFor={key}>{convertCamelCase(key)}</label>
      </span>
    ))}
  </>
);

export default SortInput;
