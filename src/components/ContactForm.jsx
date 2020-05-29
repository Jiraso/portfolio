import React, { Component } from 'react';
import { 
    Form, 
    FormGroup,
    Label,
    Input,
    Button } from 'reactstrap';

import Content from './Content';

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    handleChange=(e)=>{
        this.props.onChange(e)
    }


    render() {
        return (
            <div>
                <Content>
                <Form>
                    <FormGroup>
                        <Label for="full-name">Full Name</Label>
                        <Input
                            id="full-name"
                            name="name"
                            type="text"
                            value={this.props.children}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.children}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input
                            id="full-name"
                            name="message"
                            type="textarea"
                            rows="3"
                            value={this.state.children}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <Button
                        className="d-inline-block"
                        variant="primary"
                        type="submit"
                        disabled={this.state.disabled}
                        onClick={this.handleSubmit}>
                        Send
                    </Button>
                </Form>
                </Content>
            </div>
        )
    }
}
