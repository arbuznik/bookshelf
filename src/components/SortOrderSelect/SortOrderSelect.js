import {Select} from "../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {selectOrder, setOrder} from "../SearchForm/searchParamsSlice";

export function SortOrderSelect() {
  const dispatch = useDispatch();

  const sortOptions = ['Relevance', 'Newest'];
  const value = useSelector(selectOrder);

  function handleChange(order) {
    dispatch(setOrder(order));
  }

  return (
    <Select options={sortOptions}
            name={'sortOrder'}
            text={'Sort by'}
            onChange={handleChange}
            selected={value}/>
  )
}