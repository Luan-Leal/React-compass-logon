import "./index.css"

function Input({ type ,placeholder, name, value, onChange}) {
    return(
        <div className="input">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </div>
    )

}

export default Input