import React, { ChangeEvent, useRef, useState } from "react";
// import '../App.css'
import logo from '../assets/react.svg'

const Upload: React.FC = () => {
    const [imageFile, setImageFile] = useState<string>(logo)
    const fileRef = useRef<HTMLInputElement | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file) {
            const reader = new FileReader()
            reader.onload = () => {
                if(reader.result) {
                    setImageFile(reader.result as string)
                }
            }
            reader.readAsDataURL(file)
        }
    }


    return (
        <div style={{textAlign:'center'}}>
            <h1>Upload page</h1>
            <div>
                <header>
                    <img src={imageFile} alt="logo" style={{width: '200px'}}/>
                    <br/>
                    <input
                    ref={fileRef}
                    type="file"
                    placeholder="Gambar"
                    onChange={handleChange}
                    ></input>
                </header>
            </div>
        </div>
    )
}

export default Upload