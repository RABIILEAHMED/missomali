import { useState } from 'react';
import Modal from 'react-modal';
import styles from './modal.module.scss';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

import {useSelector,useDispatch} from "react-redux";
import { handleModal } from '../../feutures/modal/modalSlice';
import { decreaseVote, increaseVote } from '../../feutures/modal/competitors/CompetitorSlice';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

 
  Modal.setAppElement('#root');

export const VoteModal = () => {
  const dispatch = useDispatch();

    let subtitle;

  
  const {isOpen} = useSelector((store) => store.modal);
  const {currentCompetitor , voteCount} = useSelector((store) => store.competitor);
  //console.log(modalState)

 console.log(currentCompetitor)
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      dispatch(handleModal());
    }

    if(!currentCompetitor) return;

    const backgroundStyle ={
      width:"100%",
      height:"500px",
      background:`linear-gradient(0deg,#128b4871,rgba(0,0,0,0)60%,rgba(0,0,0,0)),url('${currentCompetitor.Photo}')`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      borderBottomRightRadius:"10px",
  };
  
  //form submit 

  const handlesubmit=(event)=>{
    event.preventDefault();
    // console.log("you are voted")
  }

  return(
    <div>
              {/* <button onClick={()=>dispatch(handleModal())}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}>

        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor=''>Name</label>
                <span>{currentCompetitor.FirstName + " " + currentCompetitor.LastName}</span>  
              </div>

              <div className={styles.divider}>
                <label htmlFor=''>State</label>
                <span>{currentCompetitor.RepresentingState}</span>
              </div>

              <div className={styles.divider}>
                <label htmlFor=''>Background Study</label>
                <span>{currentCompetitor.PersonalBackground}</span>
              </div>

              <div className={styles.divider}>
                <label htmlFor=''>Email Address</label>
                <span>{currentCompetitor.EmailAddress}</span>
              </div>
            </div>
          </div>

          <div className={styles.vote_container}>
            <div className={styles.vote_count}>
              <span>Purchase Votes</span>
              <div className={styles.vote_controls}>
              <button type="button"  onClick={()=>dispatch(decreaseVote())}>
                <CiSquareMinus className={styles.icon}/>
              </button>
              <span>{voteCount}</span>
              <button type="button" onClick={()=>dispatch(increaseVote())}>
                <CiSquarePlus className={styles.icon}/>
              </button>
              </div>
            </div>

          <form onSubmit={handlesubmit}>
            <span>Pay with Evc,Zaad and Edahap</span>
            <input type='number' placeholder='Enter your number' 
            className={styles.form_control}/>
            <button type="submit">Vote Now</button>
          </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}


