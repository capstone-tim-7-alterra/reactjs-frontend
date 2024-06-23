/* eslint-disable react/prop-types */
export default function DeleteM({ isOpen, onConfirm, onCancel, feature }) {
    return (
        <>
          <dialog open={isOpen} className="modal modal-action modal-middle w-[70%]">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg text-[#1F2937]">Delete</h3>
              <p className="py-4 text-[#1F2937]">This will delete the {feature} permanently. You cannot undo this action.</p>
              <div className="modal-action">
                <button className="btn btn-color-secondary" onClick={onCancel}>Close</button>
                <button className="btn btn-color-primary" onClick={onConfirm}>Delete</button>
              </div>
            </div>
          </dialog>
        </>
      );
    
} 