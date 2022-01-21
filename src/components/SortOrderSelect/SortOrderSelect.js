import {Select} from "../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {selectOrder, updateOrder} from "../SearchForm/searchParamsSlice";

export function SortOrderSelect() {
  const dispatch = useDispatch();

  const sortOptions = ['Relevance', 'Newest'];
  const currentOption = useSelector(selectOrder);

  const handleChange = option => {
    dispatch(updateOrder(option));
  };

  return (
    <Select options={sortOptions}
            name={'sortOrder'}
            text={'Sort by'}
            onChange={handleChange}
            selected={currentOption}/>
  )
}