import React from 'react';
import Simplert from 'components/Simplert';

const SubmitFail = ({show, clear}) => (
  <Simplert
    showSimplert={show}
    type='success'
    title='Kuitin tallennus onnistui'
    message='Hyvin meni'
    onClose={clear}
    onOverlayClose={clear}
  />
)

export default SubmitFail;
