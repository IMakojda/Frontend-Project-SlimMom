import { Link } from 'react-router-dom';
import { layoutStyles } from '../../stlyles/layoutStyles';
import { useMediaQuery } from 'react-responsive';
import { changeToggle } from '../../redux/dairy/dairyReducer';
import { getToggle } from '../../redux/dairy/dairySelector';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
Button,
ToastTitle,
Title,
ListItem,
List,
Arrow,
WrapperAvatar,
Wrapper,
ImgAvatar} from './UserMenu.styled';

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
        autoClose={2500}
        toastStyle={{
          top: '150px',
          border: '1px solid #FC842D',
          marginTop: '150px',
        }}
      />
    </>
  );
}
