import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

export function AboutUs() {
    return (
        <section className="about-us">
            <h2>About Us</h2>
            <div className="about-description">
                <p>
                    Welcome to our yoga company! We are a family-run business dedicated to promoting wellness and mindfulness through the practice of yoga. Our vision is to create a positive impact in the world by spreading the benefits of yoga to as many people as possible. We believe in the power of yoga to transform lives and bring about a sense of peace and balance.
                </p>
                <p>
                    As a family, we are passionate about what we do and are committed to providing high-quality yoga products and services. We strive to make a difference in the world by encouraging healthy living and supporting our community. Join us on this journey to a better, more mindful world.
                </p>
            </div>

            {/* <section className="team">
                <h3>Our Team</h3>
                <ul>
                    <li>Alon Goddard</li>
                    <li>Tali Goddard</li>
                </ul>
            </section> */}

            <section className="vision">
                <h3>Vision</h3>
                <ul>
                    <li>Save the day</li>
                    <li>Spread some love</li>
                    <li>Take over the world</li>
                </ul>
            </section>
        </section>
    )
}

export function AboutTeam() {
    return (
        <section>
            <h2>Our Team</h2>
            <ul>
                <li>Alon Goddard </li>
                <li>Tali Goddard</li>
            </ul>
        </section>
    )
}


export function AboutVision() {
    return (
        <section>
            <h2>Vision</h2>
            <ul>
                <li>Save the day</li>
                <li>Spread some love</li>
                <li>Take over the world</li>
            </ul>
        </section>
    )
}


function FancyBox(props) {
    return <div className="fancy-box">
        <button style={{ float: 'right' }} onClick={props.onClose}>x</button>
        {props.children}
    </div>
}

FancyBox.propTypes = {
    onClose: PropTypes.func.isRequired
}

function Contacts() {
    return <section style={{ height: '50vh', backgroundColor: 'pink' }}>
        <h2>Contacts</h2>
        <p>Click me</p>
    </section>
}

function Projects() {
    const [projs, setProjs] = useState(['Puki Proj', 'Muki Proj'])
    const projList = projs.map((proj, idx) => (
        <article className="proj-preview" key={proj} onClick={(ev) => {
            ev.stopPropagation()
            setProjs(projs.filter(p => p !== proj))
        }}>
            {proj}
        </article>
    ))
    return <section style={{ minHeight: '50vh', backgroundColor: 'lightblue' }}>
        <h2>Projects</h2>
        {projList}
        <button onClick={ev => {
            ev.stopPropagation()
            setProjs([...projs, 'Babu Proj' + Date.now() % 100])
        }}>Add</button>
    </section>
}

function SplitPane(props) {

    const [width, setWidth] = useState(30)

    if (false && width === 60) {
        throw new Error('Projects cannot load')
    }
    return (
        <div className="split-pane" style={{
            display: 'flex'
        }}>
            <div style={{ width: width + '%' }} onClick={() => {
                if (width + 10 <= 100) setWidth(width + 10)
            }}>
                {props.left}
            </div>
            <div style={{ flex: 1 }} onClick={() => {
                if (width > 10) setWidth(width - 10)
            }}>
                {props.right}
            </div>
        </div>
    )
}


