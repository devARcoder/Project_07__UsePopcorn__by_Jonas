const conatinerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px"
}
const starContainerStyle = {
    display: "flex",
    gap: "4px"
}
const textStyle ={
    lineHeight: "1",
    margin: "0"
}
export default function StarRating({ maxRating = 5 }){
    
    return (
        <div style={conatinerStyle}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <span>S{i+1}</span>
                ))}
            </div>
            <p style={textStyle}>{maxRating}</p>
        </div>
    )
}