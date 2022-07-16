// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/Button.styled';
import { FiX } from 'react-icons/fi';
import {DivStyles} from './Div.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { getEatProducts } from '../../redux/dairy/dairySelector';


export default function ProductsList() {
  // const [value, setValue] = useState(products);
  // const [openCalendar, setOpenCalendar] = useState(false);


  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(fetchDairy(dateFormat(value)));
  //   getDairy(date)
  // }, [dispatch]);

  // const getDairy = (date) => {
  //   dispatch(fetchDairy(date));
  // };

  const products = useSelector(getEatProducts);

  return (
    <>
      <div className="control">
        <table className="table">
          <tbody>
            {products.map(row => {
              return (
                <tr key={row.name}>
                  <td className="td-name">{row.title.ua}</td>
                  <td className="td-weight">{row.weight}</td>
                  <td className="td-calories">{row.calories}</td>
                  <td>
                    <Button
                      background={layoutStyles.mainBackground}
                      width="28px"
                      height="28px"
                      backgroundHover={layoutStyles.formBorderColor}

                      // clickOnBtn={() => {
                      //   setOpenCalendar(true);
                      // }}
                      // className={styles.iconRemove}
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
