import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './index.css';

const getModalStyle = () => (
  {
    display: 'flex',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
)

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 200,
    padding: 20,
    fontSize: '18px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

export default function UserModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    props.closeModal()
  };

  const getImg = () => 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button className={'close-button'} onClick={handleClose}>X</button>
      <img className={'user-modal-img'} src={props.user.imgUrl || getImg()}></img>
      <div>
        <div style={{ paddingBottom: '10px' }}>Fullname: {props.user.fullname}</div>
        <div style={{ paddingBottom: '10px' }}>location: {props.user.location}</div>
        <div>Skills: {props.user.skills}</div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
