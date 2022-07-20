'strict origin'
import React, { useState, useEffect } from 'react'
const Home = () => {
    const [textField, setTextField] = useState();
    const [person, setPerson] = useState();
    const [place, setPlace] = useState();
    const [personName, setPersonName] = useState(['']);
    const [placeName, setPlaceName] = useState(['']);
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
        setPerson(result.filter((arr) => arr.type == 'Person'));
        setPlace(result.filter((arr) => arr.type == 'Place'));
    };
    useEffect(() => {
        if (person) {
            person.forEach(function (arrayItem) {
                setPersonName(curr => [...curr, arrayItem.entityId]);
            });
        }
    }, [person])
    useEffect(() => {
        setPlaceName(['']);
        if (place) {
            place.forEach(function (arrayItem) {
                setPlaceName(curr => [...curr, arrayItem.entityId]);
            });
        }
    }, [place])
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
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "blue" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600" }}>
                        <p>
                            Annotations
                        </p>
                    </div>
                    <div style={{ width: "24vw", height: "5vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600" }}>
                        <p>
                            Person
                        </p>
                    </div>
                    <div style={{ width: "24vw", height: "40vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", zIndex: "2", overflowY: "scroll", overflowX: "hidden" }}>
                        {personName && personName.map((user) => (
                            user.length > 0 && <div style={{ width: "23vw", backgroundColor: "black", color: "white", height: "3vh", fontSize: "2vh", borderBottom: '1px solid white' }}>
                                {user}
                                <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw",height:"3vh"}} fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </div>
                        ))}
                    </div>
                    <div style={{ width: "24vw", height: "5vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600" }}>
                        <p>
                            Organization
                        </p>
                    </div>
                    <div style={{ width: "24vw", height: "40vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", overflowY: "scroll" }}>
                        {placeName && placeName.map((user) => (
                            user.length > 0 && <div style={{ width: "23vw", backgroundColor: "black", color: "white", height: "3vh", fontSize: "2vh", borderBottom: '1px solid white', overflowX: "hidden" }}>
                                {user}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home