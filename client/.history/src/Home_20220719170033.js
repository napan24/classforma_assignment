import React from 'react'

const Home = () => {
    return (
        <>
            <div style={{ display: 'flex', width: "100vw", height: "100vh" }}>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "black", marginRight: "1vw" }}>
                    <div style={{ width: "24vw", height: "10vh", backgroundColor: "#00008b", textAlign: 'center', fontSize: '150%', color: "white", fontWeight: "600", position: "fixed" }}>
                        <p style={{ marginTop: "2vh" }}>
                            Records
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ width: "50vw", height: "100vh", backgroundColor: "blue", marginRight: "1vw" }}>
                    <div style={{ width: "50vw", height: "10vh", backgroundColor: "#00008b" }}>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary">Left</button>
                            <button type="button" class="btn btn-primary">Middle</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "red" }}>
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