'strict origin'
import React, { useState, useEffect } from 'react'
const Home = () => {
    const [textField, setTextField] = useState();
    const [person, setPerson] = useState();
    const [place, setPlace] = useState();
    const [personName, setPersonName] = useState(['']);
    const [placeName, setPlaceName] = useState(['']);
    const [data, setData] = useState("");
    const [leftClose, setLeftClose] = useState(false);
    const [rightClose, setRightClose] = useState(false);
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
    function replace() {
        setTextField(textField.replace(data, ''));
        showAlert("alert")
    }
    function showAlert(id) {
        if (document.getElementById(id).style.display == "inline-block") {
            document.getElementById(id).style.display = "none";
        }
        else {
            document.getElementById(id).style.display = "inline-block";
        }
    }
    function CloseClick(e) {
        setData(e.currentTarget.parentElement.querySelector('.userName').innerText);
        showAlert("alert");
    }
    function showLeftComponent() {
        if (document.getElementById('left_component').style.display == "inline") {
            document.getElementById('left_component').style.display = "none";
            document.getElementById('left_open').style.display = "inline";
        }
        else {
            document.getElementById('left_component').style.display = "inline";
            document.getElementById('left_open').style.display = "none";
        }
        setLeftClose(!leftClose);
    }
    function showRightComponent() {
        if (document.getElementById('right_component').style.display == "inline") {
            document.getElementById('right_component').style.display = "none";
            document.getElementById('right_open').style.display = "inline";
        }
        else {
            document.getElementById('right_component').style.display = "inline";
            document.getElementById('right_open').style.display = "none";
        }
        setRightClose(!rightClose);
    }
    return (
        <>
            <div id="alert" style={{ display: "none", height: "35vh", width: "35vw", backgroundColor: "white", position: "absolute", zIndex: '2', left: "35%", top: "25%", border: "2px solid red" }}>
                <button onClick={() => { showAlert("alert") }} type="button" class="btn btn-primary" style={{ marginRight: "1vw", position: "absolute", bottom: "10%", left: "15%", padding: "2vh" }}>Cancel</button>
                <button onClick={(e) => { replace(e) }} style={{ marginRight: "1vw", position: "absolute", bottom: "10%", left: "65%", padding: "2vh" }} type="button" class="btn btn-primary">Delete</button>
            </div>
            <div style={{ display: 'flex', width: "100vw", height: "100vh", backgroundColor: "#8f9091", overflow: "hidden" }}>
                <div id="left_component" style={{ display: 'inline', width: "24vw", height: "100vh", backgroundColor: "white", marginRight: "1vw" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600"}}>
                        <p style={{ marginTop: "1.5vh" }}>
                            Records
                        </p>
                    </div>
                    <svg onClick={() => { showLeftComponent() }} style={{ width: "5vw", height: "5vh", position: 'absolute', left: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "black",overflow:"hidden",color:"white",fontSize:"120%",display:"flex",justifyContent:'center',alignItems:'center' }}>
                        <span style={{top:"10vh"}}>
                            1
                        </span>
                        <span style={{height:"2vh",width:"20vw",marginLeft:"2vw"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                </div>
                <div style={{ width: leftClose && rightClose ? "100vw" : rightClose ? "75vw" : leftClose ? "75vw" : "50vw", height: "100vh", backgroundColor: "white", marginRight: "1vw", overflowY: "unset" }}>
                    <div style={{ width: leftClose && rightClose ? "100vw" : rightClose ? "75vw" : leftClose ? "75vw" : "50vw", height: "10vh", backgroundColor: "#00008b", position: 'relative', overflowY: 'hidden' }}>
                        <svg id="left_open" onClick={() => { showLeftComponent() }} style={{ display: "none", width: "5vw", height: "5vh", position: 'absolute', left: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <div class="btn-group" style={{ marginTop: "1.5vh", marginLeft: "15vw" }}>
                            <button type="button" class="btn btn-primary" style={{ marginRight: "1vw" }}>Person</button>
                            <button type="button" class="btn btn-primary">Organization</button>
                        </div>
                        <label for="file">
                            <svg style={{ width: "20%", height: "50%", position: "absolute", right: "15%", top: "2vh", color: "white" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </label>
                        <input type="file" id="file" onChange={(e) => showFile(e)} style={{ display: "none" }} />
                        <svg id="right_open" onClick={() => { showRightComponent() }} style={{ display: "none", width: "5vw", height: "5vh", position: 'absolute', right: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div style={{ width: leftClose && rightClose ? "98vw" : rightClose ? "73vw" : leftClose ? "73vw" : "48vw", height: "85vh", marginLeft: "2vw", marginTop: "5vh", overflowY: "scroll" }}>
                        {textField}
                    </div>
                </div>
                <div id="right_component" style={{ display: 'inline', width: "24vw", height: "100vh", backgroundColor: "white" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", position: 'relative' }}>
                        <p style={{ paddingTop: "1.5vh" }}>
                            Annotations
                        </p>
                        <svg onClick={() => { showRightComponent() }} style={{ width: "5vw", height: "5vh", position: 'absolute', right: "0vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
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
                                <svg onClick={(e) => { CloseClick(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
                                <svg onClick={(e) => { CloseClick(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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