import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { setInformationModalWindow } from '../../../redux/slices/modalSlice';
import InformationModalPage from '../../../components/informationModal/InformationModalPage';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';



export default function NavbaRight() {
    const { loggedUser } = useSelector(state => state.userSlice);
    const { informationModalWindow } = useSelector(state => state.modalSlice);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openInformationModal = () => {
        dispatch(setInformationModalWindow());
    }
    return (
        <div className='navbar_right_container'>
            <div className='icon_wrapper'>
                <AiFillHome className='home icon' onClick={() => navigate('/')}/>
                <HiOutlineClipboardDocumentList className='list icon' />
            </div>
            <div className='navbar_right_user_information' >
                    <div  className='user_icon_wrapper' onClick={() => openInformationModal()}>
                        <div className='user_name' >{loggedUser.name}</div>
                        {
                            informationModalWindow ?
                                <div><InformationModalPage /> <BiUpArrow className='up_arrow arrow_icon' /> </div>
                                : <BiDownArrow className='down_arrow arrow_icon' />
                        }
                    </div>
            </div>

        </div>

    )
}
