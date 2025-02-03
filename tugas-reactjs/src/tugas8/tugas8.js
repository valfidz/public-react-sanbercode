import '../App.css';
import { useState } from 'react';

function Tugas8() {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count += 1);
    }

    return (
        <div className='container-lg overflow-x-auto mx-auto max-w-screen-xl mb-10 border-2 rounded-md shadow-lg mt-10'>
            <div className='count'>
                <p className='mb-3'>{count}</p>
                {count >= 10 ? <p className='notice mb-4'>State count sudah lebih dari 10!!</p> : ""}
            </div>
            <div className='count-button'>
                <button onClick={handleClick}>Tambah</button>
            </div>
        </div>
    )
}

export default Tugas8