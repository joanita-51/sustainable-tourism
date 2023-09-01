export const MyTextInput = ({label, error, ...props})=>{
    return(
        <div className="m-5">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='border border-black block p-2 rounded-lg' {...props}/>
            <div className="text-red-500">{error}</div>
            

        </div>
    )
}
export const MyRadioBox = ({children, error, ...props}) => {

    return(
        <div className="m-5">
            <label >
                <input type="radio" {...props}/>
                {children}
            </label>
            <div className="text-red-500">{error}</div>
        </div>
    )
}
export const MyPhoneNumber = ({label, error, ...props})=>{
    return(
        <div className="m-5">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="tel" className='border border-black block p-2 rounded-lg' {...props}/>
            <div className="text-red-500">{error}</div>
            

        </div>
    )
}

export const MyCheckbox = ({children, error, ...props}) => {

    return(
        <div className="m-5">
            <label >
                <input type="checkbox" {...props}/>
                {children}
            </label>
            <div className="text-red-500">{error}</div>
        </div>
    )
}

export const MySelect = ({label, error, ...props}) => {
    
    return (
        <div className="m-5">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...props}  className='border border-black block p-2 rounded-lg' />
            <div className="text-red-500">{error}</div>

        </div>
    )
}