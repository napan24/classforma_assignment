import React from 'react'

const Home = () => {
    return (
        <>
            <div style={{ display: 'flex', width: "100vw", height: "100vh"}}>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "black",marginRight:"1vw" }}>
                    <div style={{ width: "24vw", height: "15vh", backgroundColor: "purple",borderRight:"10px solid white" }}>
                        Records
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ width: "50vw", height: "100vh", backgroundColor: "blue",marginRight:"1vw" }}>
                    <div style={{ width: "50vw", height: "15vh", backgroundColor: "purple", borderRight:"10px solid white"}}>
                        
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ width: "24vw", height: "100vh", backgroundColor: "red" }}>
                    <div style={{ width: "24vw", height: "15vh", backgroundColor: "purple" }}>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home