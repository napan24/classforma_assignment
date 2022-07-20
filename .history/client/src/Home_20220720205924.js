'strict origin'
import { getElementById } from 'domutils';
import React, { useState, useEffect } from 'react'
import './Home.css'
import Left_section_list from './Left_section_list';
import Middle_section from './Middle_section';
const Home = () => {
    const [textField, setTextField] = useState();
    const [person, setPerson] = useState();
    const [place, setPlace] = useState();
    const [personName, setPersonName] = useState(['']);
    const [placeName, setPlaceName] = useState(['']);
    const [data, setData] = useState("");
    const [leftClose, setLeftClose] = useState(false);
    const [rightClose, setRightClose] = useState(false);
    const [togglePerson, setTogglePerson] = useState(false);
    const [togglePlace, setTogglePlace] = useState(false);
    useEffect(() => {
        if (textField) {
            getData();
        }
    }, [textField])
    //get names and organization using api send fetch request to backend
    const getData = async () => {
        const res = await fetch("/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ textField })
        });
        const result = await res.json();
        //use result and sort out person and place
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
    useEffect(() => {
        if (placeName) {
            colorPlace();
        }
    }, [placeName]);
    function colorPlace() {
        placeName.forEach(function (arrayItem) {
            changeColorPlace(document.getElementById('textField'), arrayItem); 
        });
    }
    useEffect(() => {
        if (personName) {
            colorName();
        }
    }, [personName]);
    function colorName() {
        personName.forEach(function (arrayItem) {
            changeColorName(document.getElementById('textField'), arrayItem); 
        });
    }
    const changeColorName = (a, b) => a.innerHTML = a.innerHTML.replace(b, `<span style="color:blue;">${b}</span>`);
    const changeColorPlace = (a, b) => a.innerHTML = a.innerHTML.replace(b, `<span style="color:red;">${b}</span>`);
    //used to read text file
    const showFile = async (e) => {
        console.log("");
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setTextField(text);
        };
        reader.readAsText(e.target.files[0])
    }
    //Remove any occourence of removed name or org
    function replace() {
        setTextField(textField.replace(data, ''));
        showAlert("alert")
    }
    //on Clicking close on any name or org this helps alert pop up
    function showAlert(id) {
        if (document.getElementById(id).style.display == "inline-block") {
            document.getElementById(id).style.display = "none";
        }
        else {
            document.getElementById(id).style.display = "inline-block";
        }
    }
    // sets the name that is to be removed
    function CloseClick(e) {
        setData(e.currentTarget.parentElement.querySelector('.userName').innerText);
        showAlert("alert");
    }
    // opening and closing of left component
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
    // opening and closing of right component
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
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600" }}>
                        <p style={{ paddingTop: "1.5vh" }}>
                            Records
                        </p>
                    </div>
                    <svg onClick={() => { showLeftComponent() }} style={{ width: "5vw", height: "5vh", position: 'absolute', left: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    {/* its given this compoenent is hard coded */}
                    <Left_section_list></Left_section_list>
                </div>
                <Middle_section leftClose={leftClose} rightClose={rightClose} showLeftComponent={showLeftComponent}  showRightComponent={showRightComponent} textField={textField} showFile={showFile}></Middle_section>
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