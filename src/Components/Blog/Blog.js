import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
    return (

        <section className='container' id='blog'>
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>How does react works?</Accordion.Header>
                    <Accordion.Body>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It's a library not a framework that creates user interfaces(UI). Also React is component based and hook based as well like useState, useEffect.The main concept of React. js is virtual DOM.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the differences between props and state?</Accordion.Header>
                    <Accordion.Body>
                        Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header> Without Data Load, What Is The Other Purpose Of useEffect ?</Accordion.Header>
                    <Accordion.Body>
                        useEffect is a react hook. React side effect handle useEffect main
                        work. For example: Data load, setTimer, Dom Manipulation.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </section>
    );
}

export default AllCollapseExample;

