const UploadFile = ({ onChange }) => {
  return (
    <>
      <p>Cargue su archivo de excel para continuar</p>
      <div className='mt-6'>
        <input type="file" onChange={onChange} />
      </div>
    </>
  );
};

export default UploadFile;
