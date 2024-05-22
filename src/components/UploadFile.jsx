const UploadFile = ({ onChange }) => {
  return (
    <>
      <p className="text-xl">Upload your Excel file to continue</p>
      <div className='mt-6'>
        <input type="file" onChange={onChange} />
      </div>
    </>
  );
};

export default UploadFile;
