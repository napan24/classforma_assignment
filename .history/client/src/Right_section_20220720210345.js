import React from 'react'

const Right_section = (props) => {
    return (
        <>
            <div id="right_component" style={{ display: 'inline', width: "24vw", height: "100vh", backgroundColor: "white" }}>
                <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", position: 'relative' }}>
                    <p style={{ paddingTop: "1.5vh" }}>
                        Annotations
                    </p>
                    <svg onClick={() => { props.showRightComponent() }} style={{ width: "5vw", height: "5vh", position: 'absolute', right: "0vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div style={{ width: "24vw", height: "5vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", marginBottom: "2vh" }}>
                    <p>
                        Person
                    </p>
                </div>
                <div style={{ maxWidth: "24vw", height: "40vh", backgroundColor: "white", textAlign: 'center', fontSize: '150%', color: "black", fontWeight: "600", zIndex: "2", overflowY: "scroll", overflowX: "hidden" }}>
                    {props.personName && props.personName.map((user) => (
                        user.length > 0 && <div style={{ width: "24vw", color: "black", height: "3vh", fontSize: "2vh", position: 'relative', borderBottom: '1px solid black' }}>
                            <span className='userName' style={{ width: "12vw" }}>
                                {user}
                            </span>
                            <svg onClick={(e) => { props.CloseClick(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
                    {props.placeName && props.placeName.map((user) => (
                        user.length > 0 && <div style={{ width: "24vw", color: "black", height: "3vh", fontSize: "2vh", position: 'relative', borderBottom: '1px solid black' }}>
                            <span className='userName' style={{ width: "12vw" }}>
                                {user}
                            </span>
                            <svg onClick={(e) => { props.CloseClick(e) }} style={{ width: "3.5vw", height: "3.5vh", position: 'absolute', right: "0vw", top: "0vh" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Right_section