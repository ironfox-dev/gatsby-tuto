import React from 'react';
import { Link } from "gatsby";
import Header from '../components/Header';
import Layout from "../components/layout";

const color = {
    color: '#555',
}

const Contact = () => {
    return (
        <Layout style={color}>
            <Link to="/">Home</Link>
            <Header title={'Contact page'} />
            <p>Send us a message!</p>
        </Layout>
    )
}

export default Contact;