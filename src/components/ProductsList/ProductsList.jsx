import { useSelector, useDispatch } from 'react-redux';
import Button from '../button/Button.styled';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { DivStyles } from './Div.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { getEatProducts, getDate } from '../../redux/dairy/dairySelector';

import { removeProduct } from '../../redux/dairy/dairyOperations';

export default function ProductsList() {
  const dispatch = useDispatch();

  const deleteProduct = (date, id) => {
    dispatch(removeProduct({ dataFormat: date, id: id }));
  };
  const date = useSelector(getDate);
  const products = useSelector(getEatProducts);

  return (
    <>
      <div className="control">
        {products.length ===0 ?
        <p className="info">Тут буде список продуктів та напоїв, що з'їли та випили за день. </p> :
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
                        deleteProduct(date, row.id);
                        toast.success(`Видалено!`) // не обрабатывается ошибка
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
        </table>}
      </div>
      <DivStyles />
    </>
  );
}
