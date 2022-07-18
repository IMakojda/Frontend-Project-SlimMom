import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiCornerDownLeft } from 'react-icons/fi';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { useMediaQuery } from 'react-responsive';
import { changeToggle } from '../../redux/dairy/dairyReducer';
import { getToggle } from '../../redux/dairy/dairySelector';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Title = styled.h2`
  margin: 0;
  display: inline;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  padding: 15px 16px 13px 0;
  margin-left: 10px;
  border-right: 2px solid ${layoutStyles.formBorderColor};
`;

const Button = styled.button`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: none;
  background-color: transparent;
  padding: 4px 10px 0 15px;
  cursor: pointer;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;

const Arrow = styled(FiCornerDownLeft)`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: none;
    visibility: hidden;
  }
`;

const List = styled.div`
  display: none;
  @media only screen and (min-width: ${layoutStyles.deskTop}) {
    display: flex;
    margin-right: 610px;
  }
`;

const ListItem = styled(NavLink)`
  color: ${layoutStyles.placeholderColor};
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  padding: 10px 10px 10px 0;
  &.active {
    color: #212121;
  }
`;

const ToastTitle = styled.h2`
  padding: 20px;
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
`;

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const ImgAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const WrapperAvatar = styled.div`
  width: 50px;
  height: 45px;
  overflow: hidden;
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getUserAvatar);

  const toggle = useSelector(getToggle);
  const isMobile = useMediaQuery({
    query: `(max-width: ${layoutStyles.tablet})`,
  });

  const notify = () =>
    toast(
      <>
        <ToastTitle>Ви впевнені,що хочете залишити цю сторінку?</ToastTitle>
        <Button
          type="button"
          onClick={() => {
            toast.dismiss();
            dispatch(authOperations.logOut());
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
      {
        position: 'top-center',
        theme: 'light',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );

  return (
    <>
      <List>
        <ListItem to="/diary">Щоденник</ListItem>
        <ListItem to="/calculator">Калькулятор</ListItem>
      </List>
      <Button
        type="button"
        onClick={() => {
          if (isMobile && toggle) {
            dispatch(changeToggle(false));
          }
        }}
      >
        <Arrow color="black" size="20px" />
      </Button>
      <Wrapper>
        <Link to="/avatar">
          <WrapperAvatar>
            <ImgAvatar src={avatar} alt="" />
          </WrapperAvatar>
        </Link>
        <Title>{name}</Title>
        <Button type="button" onClick={notify}>
          Вихід
        </Button>
      </Wrapper>
      <ToastContainer
        toastStyle={{
          border: '1px solid #FC842D',
        }}
      />
    </>
  );
}
