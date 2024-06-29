import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../redux/slices/alertdialog";

const Alertdialog = () => {
    const dispatcher = useDispatch();
    const state = useSelector(state => state.alertdialogReducer);

    const { visibility, title, description, button } = state;

    return <div className={`fixed ${visibility ? "block" : "hidden"} inset-0 z-10 overflow-y-auto transition-all duration-300`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{title}</h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => dispatcher(hide())}>{button}</button>
                </div>
            </div>
        </div>
    </div>;

};

export default Alertdialog;