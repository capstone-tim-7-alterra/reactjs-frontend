export default function DeleteM() {
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-action modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-[#1F2937]">Delete</h3>
                <p className="py-4 text-[#1F2937]">This will delete post permanently. You cannot undo this action</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-color-secondary">Close</button>
                    <button className="btn btn-color-primary">Delete</button>
                </form>
                </div>
            </div>
            </dialog>
        </>
    )
} 