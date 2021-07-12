import {useState} from "react";

const Hex2rgb = () => {
    const [inputField, setInputField] = useState('#ffffff');
    const [rgbColor, setRgbColor] = useState('rgb(255, 255, 255)');

    const handleColorChange = evt => {
        setInputField(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(inputField);
        const rgb = result ? `
            rgb(${parseInt(result[1], 16)},
            ${parseInt(result[2], 16)},
            ${parseInt(result[3], 16)})
        `
         : 'Ошибка!';
        setRgbColor(rgb);
    }

    return (
        <>
            <form id="colorForm" onSubmit={handleSubmit}>
                <input type="text" name="hexColor" value={inputField} onChange={handleColorChange} />
            </form>
            <div>{rgbColor}</div>
        </>


    )
}

export default Hex2rgb;