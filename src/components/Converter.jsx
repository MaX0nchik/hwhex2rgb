import { useState } from 'react'

export default function Converter () {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : "Ошибка!";
    }
  


    const onChange = (event) => {
        const {target} = event;
        const {value} = target;
        setValue(value);
        let results;
        if (value.length === 7) {
            results = hexToRgb(value);
            results = results === "Ошибка!" ? results : "rgb(" + results.r + ", " + results.g + ", " + results.b + ")";
            setResult(results);
        }
        
        
    }

    
    let styleColor = result === "Ошибка!" ? "white" : result;

    return(
        <form>
            <div className="container" style={{backgroundColor: styleColor}}>
            <input type="text" name="hexcolor" maxLength={7} value={value} onChange={onChange}/><p></p>
            <label name="res" style={{backgroundColor: '#000000'}}>{result}</label>
            </div>
        </form>
    )
}