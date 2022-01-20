interface InputProps {
    value: string | number
    onChange: any
}

export function Input(props: InputProps):JSX.Element {
    const {value, onChange} = props
    return(
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}