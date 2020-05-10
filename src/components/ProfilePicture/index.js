import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { fileReader } from '../../utils/fileReader';
import {
  FrameImage,
  BoxDrag,
  BoxImage,
  BoxActions,
  IconDelete,
} from './styles';
import { Slider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const ProfilePicture = props => {
  const { t } = useTranslation();
  const inputFileRef = useRef();

  const [image, setImage] = useState('');
  const [zoom, setZoom] = useState(1.0);

  /**
   * Handle the image.
   */
  const handleFileChange = event => {
    readFile(event.target.files[0]);
    event.target.value = '';
  };

  /**
   * Read the image file.
   */
  const readFile = file => {
    fileReader(file, {
      onLoadEnd: data => {
        const { base64Image } = data;
        setImage(base64Image);
      },
    });
  };

  /**
   * Drag in drop event, get the image file.
   */
  const handleDrop = dropped => {
    setImage(dropped[0]);
  };

  /**
   * Fire click event for select image file.
   */
  const handleTapToSelect = () => {
    inputFileRef.current.click();
  };

  /**
   * Function for change value of the zoom
   */
  const handleZoom = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      noKeyboard
      noClick
      style={{ width: '250px', height: '250px' }}
    >
      {({ getRootProps, getInputProps }) => (
        <FrameImage {...getRootProps()}>
          {image ? (
            <BoxImage>
              <AvatarEditor
                ref={props.refPicture}
                border={1}
                color={[33, 150, 243, 0.6]}
                width={props.width || 300}
                height={props.height || 300}
                scale={zoom}
                image={image}
              />
              <BoxActions>
                <Slider
                  value={zoom}
                  onChange={handleZoom}
                  step={0.01}
                  min={1}
                />
                <IconDelete onClick={() => setImage(null)} />
              </BoxActions>
            </BoxImage>
          ) : (
            <BoxDrag
              style={{ width: props.width || 300, height: props.height || 300 }}
              onClick={() => handleTapToSelect()}
            >
              <input
                type="file"
                style={{ display: 'none' }}
                ref={inputFileRef}
                accept="image/jpg,image/jpeg,image/png,image/bmp,image/gif"
                onChange={handleFileChange}
              />
              <p>{t('message.drag_or_select_image')}</p>
            </BoxDrag>
          )}
        </FrameImage>
      )}
    </Dropzone>
  );
};

ProfilePicture.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  refPicture: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default ProfilePicture;
