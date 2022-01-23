import React, { useState } from 'react';

export default function UploadForm() {
    const [file,setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        var selected = e.target.files[0];
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

  return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className='error'>{error}</div>}
                {file && <div className='error'>{file}</div>}
                
            </div>
        </form>
    )
}