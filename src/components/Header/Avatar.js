import { toast } from 'react-toastify';
import { Avatar, Box, Button, Slider } from '@material-ui/core';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

//import authOperations from '../../redux/auth/authOperations';
//import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { layoutStyles } from '../../stlyles/layoutStyles';
const BoxA = styled.div`
  @media only screen and (min-width: ${layoutStyles.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  } ;
`;

export default function AvatarUpload() {
  // const dispatch = useDispatch();

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
    toast.dismiss();
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
      toast.dismiss();
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
          <Button
            variant="contained"
            width="100%"
            style={{
              backgroundColor: '#FC842D',
              color: 'white',
            }}
          >
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Button>
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
