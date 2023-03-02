import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterInputChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={s.filterWrapper}>
      <label className={s.filterLabel} htmlFor="idFilter">
        Find contacts by name
      </label>
      <input
        autoComplete="off"
        id="idFilter"
        className={s.input}
        name="filter"
        value={filter}
        onChange={onFilterInputChange}
      />
    </div>
  );
};

export default Filter;
