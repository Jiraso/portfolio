import React from 'react';
import { 
    Form, 
    FormGroup,
    Label,
    Input,
    Button } from 'reactstrap';

import Content from '../components/Content';
import Hero from '../components/Hero';


class ContactPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange= e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name] :value })
    }

    handleSubmit= e =>{
        e.preventDefault();

        this.setState({
            disabled:true,
            //put in a conditional statement here for if email is sent or not
            emailSent: false
        })
    }

    render(){
    return(
        <React.Fragment>
         <Hero title={this.props.title}></Hero>
         <Content>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="full-name">Full Name</Label>
                        <Input
                            id="full-name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input
                            id="message"
                            name="message"
                            type="textarea"
                            rows="3"
                            value={this.state.message}
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <Button
                        className="d-inline-block"
                        color="primary"
                        type="submit"
                        disabled={this.state.disabled}
                        onClick={this.handleSubmit}>
                        Send
                    </Button>
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Form>
                </Content>
        </React.Fragment>
    )
}
}

export default ContactPage