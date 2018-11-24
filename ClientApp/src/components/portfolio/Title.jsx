import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

export class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="title-section parallax">
                <Grid>
                    <h1 className="text-center title title-color-font">Andre Burke</h1>
                    <h2 className="text-center sub-title title-color-font">Software Engineer</h2>
                </Grid>
            </section>
        );
    }
}