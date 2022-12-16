const Input = ({ type, placeholder, textarea, isSubmit, text }) => {

    if (textarea) {
        return <textarea placeholder={placeholder}></textarea>
    }

    if (isSubmit) {
        return <input type={type} value={text} />
    }

    return  <input type={type} placeholder={placeholder} />
}

export { Input }