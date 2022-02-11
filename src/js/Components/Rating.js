import Star from "./Star";

const Rating = ({rating}) => {
    const setRating = () => {
        return [...Array(5)].map((entry, key) => {
            let color = '#E3E3E3';

            if (rating > key) {
                color = '#FF6060';
            }
            return (
                <Star key={key} color={color}/>
            )
        })
    }

    return (
        <div className="stars-container">
            {
                    setRating()
            }
        </div>
    )
}
export default Rating
