import React from "react"
import useInput from "../../customHooks/useInput";
import {addNote} from "../../store/actions/noteAction";
import {useDispatch} from "react-redux";

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [desc, bindDesc, resetDesc] = useInput();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title, desc}));
        resetTitle();
        resetDesc();
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_desc" className="materialize-textarea" {...bindDesc} ></textarea>
                    <label htmlFor="note_desc">Note Description</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form;