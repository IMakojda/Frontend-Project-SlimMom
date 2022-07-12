// import useMediaQuery from "react-responsive";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { layoutStyles } from '../../stlyles/layoutStyles';
import Button from '../button/Button.styled';

import { FiX } from 'react-icons/fi';
// import styles from "./ProductsList.module.css";

const columns = [
  {
    id: 'name',
    minWidth: 130,
    paddingLeft: 0,
    padding: 'none',
  },
  { id: 'weight', minWidth: 49, align: 'right', paddingRight: 0 },
  {
    id: 'calorie',
    minWidth: 58,
    align: 'right',
    paddingRight: 0,
    padding: 'none',
  },
];

// function createData(name, weight, calorie) {
//   return { name, weight, calorie };
// }

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
  //  let isDesktop = useMediaQuery({
  //   query: "(min-width: 1200px)"
  //    });

  //    const isTablet = useMediaQuery({
  //   query: "(min-width: 768px)"
  //    });

  let media = {
    width: 230,
    border: 0,
    boxShadow: 'none',
  };
  //   //  console.log(isTablet)
  //    if (isDesktop||isTablet) {
  //     isTablet===null ? media.width=610 : media.width=731

  //    }

  return (
    <>
      <Paper sx={media}>
        <TableContainer
          sx={{
            maxHeight: 252,
            '&::-webkit-scrollbar': {
              width: 6,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#F0F1F3',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#264061',
            },
          }}
        >
          <Table sx={{ borderCollapse: 'separate', borderSpacing: '8px 0px' }}>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          padding="none"
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}

                    <Button
                      background={layoutStyles.mainBackground}
                      width="28px"
                      height="28px"

                      // clickOnBtn={() => {
                      //   setOpenCalendar(true);
                      // }}
                      // className={styles.iconRemove}
                    >
                      <FiX
                        width="14"
                        height="14"
                        fill={layoutStyles.placeholderColor}
                      />
                    </Button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
