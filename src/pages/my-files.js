import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles ({ data }) {
    console.log("data", data)
    return (
        <Layout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>N<ins>o</ins></th>
                            <th>Id</th>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{node.id}</td>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    id
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`;