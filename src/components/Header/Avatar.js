import { Avatar, Box, Button, Slider } from '@material-ui/core';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BoxA,
  ButtonForm,
  Input,
  Form } from './Avatar.styled';

export default function AvatarUpload() {
  const dispatch = useDispatch();

  var editor = '';

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

      picture.img = canvasScaled.toDataURL();
      setPicture({
        ...picture,

        cropperOpen: false,
        croppedImg: picture.img,
      });
    }
  };

  const handleFileChange = e => {
    let url = URL.createObjectURL(e.target.files[0]);

    setPicture({
      ...picture,
      img: url,
      cropperOpen: true,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      authOperations.updateAvatar(
        JSON.stringify({ avatar: picture.croppedImg })
      )
    );
    toast.success('Світлину змінено!', { position: 'top-center' });
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
            <ButtonForm type="submit">Змінити</ButtonForm>
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
