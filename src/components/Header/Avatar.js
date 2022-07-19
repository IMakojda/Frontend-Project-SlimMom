import { Avatar, Box, Button, Slider } from '@material-ui/core';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';

const BoxA = styled.div`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  } ;
`;
const ButtonForm = styled.button`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: 1px solid ${layoutStyles.activeButton};
  background-color: transparent;
  padding: 7px;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;

const Input = styled.input`
  font-family: ${layoutStyles.gothamPro};
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: ${layoutStyles.placeholderColor};
  border: 1px solid ${layoutStyles.activeButton};
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    color: ${layoutStyles.activeButton};
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function AvatarUpload() {
  const dispatch = useDispatch();

  var editor = '';

  const [selectedAvatar, setselectedAvatar] = useState(null);
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png',
  });

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value,
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false,
    });
  };

  const setEditorRef = ed => {
    editor = ed;
  };

  const handleSave = e => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      });
    }
  };

  const handleFileChange = e => {
    let url = URL.createObjectURL(e.target.files[0]);

    const avatar = e.target.files[0];
    setselectedAvatar(avatar);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedAvatar) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedAvatar);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {};
  };
  const uploadImage = async base64EncodedImage => {
    dispatch(
      authOperations.updateAvatar(JSON.stringify({ data: base64EncodedImage }))
    );
  };

  return (
    <>
      <BoxA>
        <Box marginBottom="10px">
          <Box width="35%">
            <Avatar
              src={picture.croppedImg}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Form id="form" onSubmit={handleSubmit}>
            <Input
              type="file"
              name="avatar"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
            <ButtonForm disabled={!selectedAvatar} type="submit">
              Змінити
            </ButtonForm>
          </Form>
        </Box>

        {picture.cropperOpen && (
          <Box display="block" width="50%">
            <AvatarEditor
              ref={setEditorRef}
              image={picture.img}
              width={200}
              height={200}
              border={50}
              color={[255, 255, 255, 0.6]}
              rotate={0}
              scale={picture.zoom}
            />
            <Slider
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            ></Slider>
            <Box>
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </Box>
          </Box>
        )}
      </BoxA>
    </>
  );
}
