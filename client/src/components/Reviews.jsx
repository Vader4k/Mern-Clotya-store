

const Reviews = ({props}) => {
  return (
    <div className="md:text-[1.2rem]">
      <span>{props.reviews} Review for {props.name}</span>
    </div>
  )
}

export default Reviews