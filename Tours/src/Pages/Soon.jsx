import {useState} from 'react';
import Modal from "react-modal";
import {IoMdClose} from 'react-icons/io'

// Modal.defaultStyles.overlay.backgroundColor="rgba(0,0,0,.9)"

function Soon({destination}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(){
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

  return (
    <div>
       <button 
        onClick={openModal}
        className="bg-[#EB1D36] text-white font-bold py-2 px-4 rounded-full"
        >
        Book Now
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className='flex justify-center items-center'
            overlayClassName='fixed inset-0 flex justify-center items-center bg-opacity-75 bg-gray-500'
        >
            <div className='bg-white rounded-lg p-4'>
                <div className='flex justify-end'>
                <button onClick={closeModal}>
                    <IoMdClose className='hover:text-[#EB1D36]' size={35} />
                </button>
                </div>
                <div className='container mx-auto text-center py-8'>
                <p className="text-3xl font-semibold text-[#EB1D36] mb-4 uppercase">{`${destination}`} !!</p>
                <p className="font-base">
                    Contact us at Phone: <span className="text-[#EB1D36]">0771973013</span> to confirm your booking for {`${destination}`} 🌄
                </p>
                </div>
            </div>
        </Modal>
      
    </div>
  )
}

export default Soon