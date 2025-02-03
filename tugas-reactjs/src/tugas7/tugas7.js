import '../App.css';

function Tugas7(props) {
  return (
    <div className="container-lg overflow-x-auto mx-auto max-w-screen-xl mb-10 border-2 rounded-md shadow-lg mt-10">
      <div className="card">
        <h1>Data diri peserta kelas Reactjs</h1>
      </div>
      <div className="desc">
        <ul className="list-data">
            <li><span>Nama Lengkap:</span> {props.name}</li>
            <li><span>Email:</span> {props.email}</li>
            <li><span>Batch Pelatihan:</span> {props.batch}</li>
        </ul>
      </div>
    </div>
  );
}

export default Tugas7;