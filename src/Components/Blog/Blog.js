import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

function AllCollapseExample() {
    return (

        <section classNameName='container' id='blog'>




            <div className="d-flex  justify-content-center align-items-center gap-3 py-3 pb-5">

                <div className="height bg-white w-100"></div>

                <h1 className="text-white">Blog</h1>

                <div className="height bg-white w-100"></div>

            </div>
            {/* ... */}

            <h1 class="text-center pb-3 wheat">Some React Interview Questions.</h1>




            {/* Accordion */}
            <Accordion className='container'>

                <Accordion.Item eventKey="0" >
                    <Accordion.Header>How does React works?</Accordion.Header>
                    <Accordion.Body className='text-light bg-black justify'>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It's a library not a framework that creates user interfaces(UI). Also React is component based and hook based as well like useState, useEffect.The main concept of ReactJs is virtual DOM.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the differences between props and state?</Accordion.Header>
                    <Accordion.Body className='text-light bg-black justify'>
                        Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside).
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header>Without Data Load, What are The Other Purposes Of useEffect?</Accordion.Header>
                    <Accordion.Body className='text-light bg-black justify'>
                        useEffect is a React hook. The main work of useEffect is to handle React's side-effects. For example: setTimer, Dom Manipulation, Data load.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </section>
    );
}

export default AllCollapseExample;

