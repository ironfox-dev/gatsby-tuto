import React from 'react';
import { graphql } from "gatsby";
import * as styles from "./about-css-modules.module.css";
import Layout from "../components/layout";
import Header from "../components/Header";

    const User = props => (
        <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
        </div>
    )

export default function About ({data}) {
    return (
        <Layout>
            <h3>About {data.site.siteMetadata.title}</h3>
            <Header title={"About CSS Modules"} />
            <p>CSS Modules are cool</p>
            <User
                username="Maria Randall"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
                excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Daniela Dewitt"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
                excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;