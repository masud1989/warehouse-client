import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='container w-75 mt-5 mb-5'>
                <h1 className='bg-info text-center fw-bold text-white'>Blogs Management</h1>


                    <h2 className='bg-secondary text-info'>
                        Difference between JavaScript and Node.JS
                    </h2>

                     <p className='bg-light'>
                     <strong>Difference between JavaScript and Node.JS:</strong>
                            JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
                            JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
                            JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
                            JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                            JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome. 
                    </p>   
                            
                    <h2 className='bg-secondary text-info'>
                         When should you use nodejs and when should you use mongodb
                    </h2>

                    <p className='bg-light'>
                    <strong>When should we use Nodejs?</strong> It is hidden by default, 
                            Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                            So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br></br><br></br>
                            <strong>When should we use MongoDB?</strong>
                            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                    </p>
                    <h2 className='bg-secondary text-info'>
                    Differences between sql and nosql databases.
                    </h2>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">SQL</th>
                            <th scope="col">No SQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                            </tr>
                            <tr>
                            <td>These databases are not suited for hierarchical data storage</td>
                            <td>These databases are best suited for hierarchical data storage</td>
                            </tr>
                            <tr>
                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>
                            </tr>
                            <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                            </tr>
                            <tr>
                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className='bg-secondary text-info'>
                        What is the purpose of jwt and how does it work?
                    </h2>

                    <p className='bg-light'>
                         <strong>Purpose of JWT:</strong> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. 
                        <br></br>
                         <strong> How does JWT work:</strong> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature. 

The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  

The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 

The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>

            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Blogs;