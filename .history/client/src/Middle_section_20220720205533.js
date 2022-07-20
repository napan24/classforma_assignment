import React from 'react'

const Middle_section = () => {
    return (
        <>
            <div style={{ width: props.leftClose && props.rightClose ? "100vw" : props.rightClose ? "75vw" : props.leftClose ? "75vw" : "50vw", height: "100vh", backgroundColor: "white", marginRight: "1vw", overflowY: "unset" }}>
                <div style={{ width: props.leftClose && props.rightClose ? "100vw" : props.rightClose ? "75vw" : props.leftClose ? "75vw" : "50vw", height: "10vh", backgroundColor: "#00008b", position: 'relative', overflowY: 'hidden' }}>
                    <svg id="left_open" onClick={() => { props.showLeftComponent() }} style={{ display: "none", width: "5vw", height: "5vh", position: 'absolute', left: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
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
                    <input type="file" id="file" onChange={(e) => props.showFile(e)} style={{ display: "none" }} />
                    <svg id="right_open" onClick={() => { props.showRightComponent() }} style={{ display: "none", width: "5vw", height: "5vh", position: 'absolute', right: "1vw", top: "2.5vh", color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div id="textField" style={{ width: props.leftClose && props.rightClose ? "98vw" : props.rightClose ? "73vw" : props.leftClose ? "73vw" : "48vw", height: "85vh", marginLeft: "2vw", marginTop: "5vh", overflowY: "scroll" }}>
                    {textField}
                </div>
            </div>
        </>
    )
}

export default Middle_section