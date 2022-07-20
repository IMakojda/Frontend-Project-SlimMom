import { layoutStyles } from '../../../stlyles/layoutStyles';
import styled, { createGlobalStyle } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputLabel-root': {
      color: layoutStyles.placeholderColor,
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      textAlign: 'end',
      padding: 0,
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
    },
    '& .MuiOutlinedInput-input': {
      textAlign: 'left',
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: 1.22,
      letterSpacing: '0.04em',
      paddingRight: '2px',
      paddingLeft: '2px',
    },
    '& .MuiOutlinedInput-input[type=number]': {
      textAlign: 'right',
    },
    '& .MuiFormLabel-colorPrimary.Mui-focused ': {
      color: layoutStyles.activeButton,
    },
  },
  inputRoot: {
    '& .MuiAutocomplete-input': {
      fontFamily: layoutStyles.verdana,
      fontWeight: 700,
      fontSize: '14px',
      background:' transparent',
    },
    '& .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
    '@media screen and (max-width: 768px': {
      minWidth: '280px',
    },
  },
}));

const DivWrapper = styled.div`
  display: ${props => props.display};
  position: absolute;
  top: 0;
  padding-top: 80px;
  background-color: ${layoutStyles.mainBackground};

  @media screen and (min-width: ${layoutStyles.tablet}) {
    position: relative;
    display: block;
    padding: 0;
    background: transparent;
  }
`;

const FormikWrapperStyles = createGlobalStyle`
   .ProductForm {
    padding-top: 80px;
    background-color: ${layoutStyles.mainBackground};
    display: block;
    margin: 0px;
    outline: none;
    padding: 0 20px;
    height: 100vh;
}
.ProductName {
  margin:  0 32px 20px 0;
}
.BtnName{
  width: 176px;
  color: ${layoutStyles.mainBackground}
}

@media screen and (min-width: ${layoutStyles.tablet}) {
 .ProductForm {
  display: flex;
  margin:  0 0 60px 0;
  padding: 0;
  outline: none;
  width: 240px;
  height: 100%;
  background: transparent;
}
.ProductWeight {
  margin-right: 87px;
}
.ProductName {
  margin: 0 32px 0 0;
}
  }
@media screen and (min-width: ${layoutStyles.deskTop}) {
  .ProductName {
    margin-right: 48px;
  }
  .ProductWeight {
    margin-right: 60px;
  }
}
`;

export { FormikWrapperStyles, useStyles, DivWrapper };
