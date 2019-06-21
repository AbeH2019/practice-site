import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact"/>
                <h3>Contact me at:</h3>
                <p>abeherham@outlook.com</p>
                <p><a href="https://google.com">Go to Google</a></p>
            </Layout>
        </div>
    )
}

export default ContactPage