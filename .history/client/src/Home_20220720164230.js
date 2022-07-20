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
        console.log(result);
        setPerson(result.filter((arr) => arr.type == 'Person'));
        setPlace(result.filter((arr) => arr.type[0] == 'Place' || arr.type[0] == 'PopulatedPlace' || arr.type[0] == 'Settlement' || arr.type[0] == 'City'));
    };
    useEffect(() => {
        setPersonName(['']);
        if (person) {
            person.forEach(function (arrayItem) {
                setPersonName(curr => [...curr, arrayItem.entityId]);
            });
        }
    }, [person])
    useEffect(() => {
        setPlaceName(['']);
        if (place) {
            console.log(place);
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
    function replace(e) {
        var data = e.currentTarget.parentElement.querySelector('.userName').innerHTML;
        setTextField(textField.replace(data, ''));
    }
    return (
        <>
            <div style={{ height: "50vh", width: "35vw", backgroundColor: "white", position: "absolute", zIndex: '2', left: "35%", top: "25%", border: "2px solid red" }}>
                <button type="button" class="btn btn-primary" style={{ marginRight: "1vw",position:"absolute",bottom:"10%",left:"20%",padding:"2vh" }}>Cancel</button>
                <button style={{ marginRight: "1vw",position:"absolute",bottom:"10%",left:"65%",padding:"2vh" }} type="button" class="btn btn-primary">Delete</button>
            </div>
            <div style={{ display: 'flex', width: "100vw", height: "100vh", backgroundColor: "#8f9091", overflow: "hidden" }}>
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
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600" }}>
                        <p>
                            Annotations
                        </p>
                    </div>
                    <div style={{ width: "24vw", height: "5vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", marginBottom: "2vh" }}>
                        <p>
                            Person
                        </p>
                    </div>
                    <div style={{ maxWidth: "24vw", height: "40vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", zIndex: "2", overflowY: "scroll", overflowX: "hidden" }}>
                        {personName && personName.map((user) => (
                            user.length > 0 && <div style={{ width: "24vw", color: "black", height: "3vh", fontSize: "2vh", position: 'relative', borderBottom: '1px solid black' }}>
                                <span className='userName' style={{ width: "12vw" }}>
                                    {user}
                                </span>
                                <svg onClick={(e) => { replace(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" style={{ height: "3vh", width: "2vw", color: 'red' }} fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div style={{ width: "24vw", height: "5vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", marginBottom: "2vh" }}>
                        <p>
                            Organization
                        </p>
                    </div>
                    <div style={{ width: "24vw", height: "40vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", overflowY: "scroll" }}>
                        {placeName && placeName.map((user) => (
                            user.length > 0 && <div style={{ width: "24vw", color: "black", height: "3vh", fontSize: "2vh", position: 'relative', borderBottom: '1px solid black' }}>
                                <span className='userName' style={{ width: "12vw" }}>
                                    {user}
                                </span>
                                <svg onClick={(e) => { replace(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" style={{ height: "3vh", width: "2vw", color: 'red' }} fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home