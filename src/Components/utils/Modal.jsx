import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const Modal = ({ isOpen, onClose, closeOnClickOutside, children }) => {
  // Close the modal when clicking outside if `closeOnClickOutside` is true
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background' && closeOnClickOutside) {
      onClose();
    }
  };

  // Close the modal when pressing the "Escape" key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Determine if the modal should be visible and animate
  const modalVisibilityClass = isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full';

  return (
    <div
      id="modal-background"
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? 'visible' : 'invisible'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out ${modalVisibilityClass}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-0 w-[74px] h-10 rounded-l-full  text-center place-content-center text-black bg-neutral-200"
        >
          <span className='bg-white px-2 rounded-full text-2xl'>&times;</span>
        </button>

        {/* Modal content */}
        {children}
      </div>
    </div>
  );
};

// Prop types for type checking
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Required boolean to determine if the modal is open
  onClose: PropTypes.func.isRequired, // Required function to handle closing the modal
  closeOnClickOutside: PropTypes.bool, // Optional boolean to determine if clicking outside closes the modal
  children: PropTypes.node, // Optional children to render inside the modal
};

// Default prop values
Modal.defaultProps = {
  closeOnClickOutside: true, // Default to true if not provided
};

export default Modal;
