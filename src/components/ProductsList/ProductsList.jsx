import { useSelector, useDispatch } from 'react-redux';
import Btn from '../button/Button.styled';
import { FiX } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { DivStyles } from './Div.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { getEatProducts, getDate } from '../../redux/dairy/dairySelector';
import { toastModal, toastModalPosition } from '../../stlyles/toastStyled';
import { Button, ToastTitle } from '../Header/UserMenu.styled';
import { removeProduct } from '../../redux/dairy/dairyOperations';

export default function ProductsList() {
  const dispatch = useDispatch();

  const deleteProduct = (date, id) => {
    dispatch(removeProduct({ dataFormat: date, id: id }));
  };
  const date = useSelector(getDate);
  const products = useSelector(getEatProducts);

  const notify = id =>
    toast(
      <>
        <ToastTitle>Ви впевнені,що хочете видалити?</ToastTitle>
        <Button
          type="button"
          onClick={() => {
            toast.dismiss();
            deleteProduct(date, id);
          }}
        >
          Так
        </Button>

        <Button
          type="button"
          onClick={() => {
            toast.dismiss();
          }}
        >
          Ні
        </Button>
      </>,
      toastModalPosition
    );

  return (
    <>
      <div className="control">
        {products.length === 0 ? (
          <p className="info">
            Тут буде список продуктів та напоїв, що з'їли та випили за день.{' '}
          </p>
        ) : (
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
                      <Btn
                        background={'transparent'}
                        width="28px"
                        height="28px"
                        backgroundHover={layoutStyles.formBorderColor}
                        onClick={() => {
                          notify(row.id);
                        }}
                      >
                        <FiX
                          width="14"
                          height="14"
                          color={layoutStyles.placeholderColor}
                        />
                      </Btn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <DivStyles />
      <ToastContainer toastStyle={toastModal} />
    </>
  );
}
