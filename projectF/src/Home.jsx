import React from 'react'
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
            <div>
                <h1>YUNWHANG</h1>
                <a href={'/Login'}><button>Get Start</button></a>
                <a href={'/Register'}><button>Register</button></a>
            </div>
        </Layout>
    )
}

export default Home