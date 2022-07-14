import Button from '../button/Button.styled';
import { FiX } from 'react-icons/fi';
import {DivStyles} from './Div.styled';
import { layoutStyles } from '../../stlyles/layoutStyles';

const rows = [
  { name: 'India', weight: 'IN', calorie: 10 },
  { name: 'China', weight: 'CN', calorie: 10 },
  { name: 'Italy', weight: 'IT', calorie: 10 },
  { name: 'United States', weight: 'US', calorie: 10 },
  { name: 'Canada', weight: 'CA', calorie: 10 },
  { name: 'Australia', weight: 'AU', calorie: 10 },
  { name: 'Germany', weight: 'DE', calorie: 10 },
  { name: 'Ireland', weight: 'IR', calorie: 10 },
  { name: 'Mexico', weight: 'MX', calorie: 10 },
  { name: 'Japan', weight: 'JP', calorie: 10 },
  { name: 'France', weight: 'FR', calorie: 10 },
  { name: 'United Kingdom', weight: 'GB', calorie: 10 },
  { name: 'Nigeria', weight: 'NG', calorie: 10 },
  { name: 'Brazil', weight: 'BR', calorie: 10 },
];

export default function ProductsList() {
  return (
    <>
      <div className="control">
        <table className="table">
          <tbody>
            {rows.map(row => {
              return (
                <tr key={row.id}>
                  <td className="td-name">{row.name}</td>
                  <td className="td-weight">{row.weight}</td>
                  <td className="td-calories">{row.calorie}</td>
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
