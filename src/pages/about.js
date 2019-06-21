import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About Abraham</h1>
                <h3>Hello that's my name</h3>
                <p><Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage