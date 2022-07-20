import React,{useState} from 'react'

const Home = () => {
    const [textField,setTextField]=useState();
    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setTextField(text);
        };
        reader.readAsText(e.target.files[0])
    }
    return (
        <>
            <div style={{ display: 'flex', width: "100vw", height: "100vh", backgroundColor: "#8f9091" }}>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "white", marginRight: "1vw" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", position: "fixed" }}>
                        <p style={{ marginTop: "2vh" }}>
                            Records
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ width: "50vw", height: "100vh", backgroundColor: "white", marginRight: "1vw" }}>
                    <div style={{ width: "50vw", height: "10vh", backgroundColor: "#00008b", position: 'relative' }}>
                        <div class="btn-group" style={{ marginTop: "1.5vh", marginLeft: "2vw" }}>
                            <button type="button" class="btn btn-primary" style={{ marginRight: "1vw" }}>Person</button>
                            <button type="button" class="btn btn-primary">Organization</button>
                        </div>
                        <label for="file">
                            <svg style={{ width: "20%", height: "50%", position: "absolute", right: "0", top: "2vh", color: "white" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </label>
                        <input type="file" id="file" onChange={(e) => showFile(e)} style={{ display: "none" }} />
                    </div>
                    <div>
                        {textField}
                    </div>
                </div>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "white" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", position: "fixed" }}>
                        <p style={{ marginTop: "2vh" }}>
                            Annotations
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home