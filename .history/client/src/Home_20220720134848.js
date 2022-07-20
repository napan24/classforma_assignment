'strict origin'
import React, { useState, useEffect } from 'react'
const Home = () => {
    const [textField, setTextField] = useState();
    const [person,setPerson]=useState();
    const [place,setPlace]=useState();
    const [personName,setPersonName]=useState([]);
    useEffect(() => {
        if (textField) {
            trending();
        }
    }, [textField])
    const trending = async () => {
        const res = await fetch("/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ textField })
        });
        const result = await res.json();
        setPerson(result.filter((arr)=>arr.type=='Person'));
        setPlace(result.filter((arr)=>arr.type=='Place'));
    };
    useEffect(()=>{
        if(person){
            person.forEach(function (arrayItem) {
                setPersonName(personName=> [...personName, arrayItem.entityId]);
            });
            console.log(personName);
        }
    },[person])
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
                <div style={{ width: "50vw", height: "100vh", backgroundColor: "white", marginRight: "1vw", overflowY: "unset" }}>
                    <div style={{ width: "50vw", height: "10vh", backgroundColor: "#00008b", position: 'relative', overflowY: 'hidden' }}>
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
                    <div style={{ width: "48vw", height: "85vh", marginLeft: "2vw", marginTop: "5vh", overflowY: "scroll" }}>
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