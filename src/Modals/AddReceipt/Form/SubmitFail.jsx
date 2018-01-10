import React from 'react';
import Simplert from 'components/Simplert';

const SubmitFail = ({show, error, clear}) => (
  <Simplert
    showSimplert={show}
    type='fail'
    title='Kuitin tallennus epäonnistui'
    message={error && error._error.message === 409 ? 'Kuitti on jo olemassa' : 'Jotain pahaa tapahtui'}
    onClose={clear}
    onOverlayClose={clear}
  />
)

export default SubmitFail;
