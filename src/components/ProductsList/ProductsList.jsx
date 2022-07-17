import { useSelector, useDispatch } from 'react-redux';
import Button from '../button/Button.styled';
import { FiX } from 'react-icons/fi';
import { DivStyles } from './Div.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { getEatProducts, getDate } from '../../redux/dairy/dairySelector';

import { removeProduct } from '../../redux/dairy/dairyOperations';

export default function ProductsList() {
  const dispatch = useDispatch();

  const deleteProduct = (date, id) => {
    dispatch(removeProduct( date, id ));
  };
  const date = useSelector(getDate);
  const products = useSelector(getEatProducts);

  return (
    <>
      <div className="control">
        <table className="table">
          <tbody>
            {products.map(row => {
              return (
                <tr key={row.id}>
                  <td className="td-name">{row.title.ua}</td>
                  <td className="td-weight">{row.weight} гр</td>
                  <td className="td-calories">
                    {Math.round(row.calories)} ккал
                  </td>
                  <td>
                    <Button
                      background={layoutStyles.mainBackground}
                      width="28px"
                      height="28px"
                      backgroundHover={layoutStyles.formBorderColor}
                      onClick={() => {
                        console.log(date);
                        console.log(row.id);
                        deleteProduct(date, row.id);
                      }}
                    >
                      <FiX
                        width="14"
                        height="14"
                        color={layoutStyles.placeholderColor}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DivStyles />
    </>
  );
}
