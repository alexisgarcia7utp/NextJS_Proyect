import { useState } from "react"

export default function Index() {
    const defaultStyle = 'border shadow border-black'
    const hooverState = 'border shadow-black bg-red-580'
    
    const [texto, setTexto] = useState('Valor inicial')
    const [numero, setNumero] = useState('0')
    const [isValid, setISValid] = useState(false)
    const [checkSelected, setCheckSelected] = useState(false)
    const [selectValue, setSelectValue] = useState()
    const [buttonStyle, setButtonStyle] = useState(defaultStyle)

    const onClickHandler = () => {
        setTexto('Texto cambiado')
        console.log('clic en el boton')
    }
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value)
        console.log('entrada cambiada')
    }

    const onNumberChage = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('numero cambiado')
        setNumero(event?.target.value)
    }

    return (<div className="bg-white text-black w-full p-8 m-8 flex flex-col gap-2">
        <h1>
            Ejemplo de eventos
        </h1>
        <span>
            El valor es: {texto}
        </span>
        <input type='text' className="bh-white text-black border"
            onChange={onChangeHandler}
            value={texto}
            onFocus={( => {
                console.log('usuario activo la caja de texto')
            })}
            onBlur={( => {
                setIsValid(texto.length > 0)
                console.log('usuario desactivo la caja de texto')
            })}
        /> 
        <button className="border shadow border-black" onClick={onClickHandler}>Test button</button>
    </div>)
}

