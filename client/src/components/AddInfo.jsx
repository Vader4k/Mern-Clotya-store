
const AddInfo = ({props}) => {
  return (
    <div className="w-full">
      <h1 className="px-3 text-[1.2rem] my-2">Additional information</h1>
      <div className="flex items-center p-2 w-full">
        <span className="font-bold border w-full max-w-[300px] p-2">Size</span>
        <div className="flex items-center gap-1 uppercase w-full border p-2">
          {props.size.map((size, i) => (
            <div key={i}>{size.name},</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddInfo