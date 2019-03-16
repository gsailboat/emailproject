import React, { Component } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import emails from '../data/emails.json'
import moment from 'moment';
import '../App.css'

const { TextArea } = Input

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            to: "",
            subject: "",
            visible: false
        }
    }

    closeAlert = (e) => {
        this.setState({
            visible: false
        })
    }

    checkAdd = () => {
        if (this.state.text && this.state.to && this.state.subject) {
            emails.push({
                id: (emails.length + 1).toString(),
                received: moment().format(),
                from: "Ronny_Breitenberg41@gmail.com",
                subject: this.state.subject,
                text: this.state.text,
                read: false,
                to: this.state.to
            })
            this.setState({
                text: "",
                to: "",
                subject: ""
            })
        }
        else {
            this.setState({
                visible: true
            })
        }
    }

    changeTo = (e) => {
        console.log(e.target.value);
        this.setState({
            to: e.target.value
        })
    }

    changeSubject = (e) => {
        console.log(e.target.value);
        this.setState({
            subject: e.target.value
        })
    }

    changeText = (e) => {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    render() {
    return (
        <div className="SidePadding">
            <Form layout="vertical">
                <Form.Item
                    label="To:"
                >
                    <Input
                        onChange={this.changeTo}
                        value={this.state.to}
                    />
                </Form.Item>
                <Form.Item
                    label="Subject:"
                >
                    <Input
                        onChange={this.changeSubject}
                        value={this.state.subject}
                    />
                </Form.Item>
                <Form.Item>
                    <TextArea 
                        rows={4}
                        placeholder="Type your message here"
                        onChange={this.changeText}
                        value={this.state.text}
                    />
                </Form.Item>
            </Form>
            <Button type="primary" onClick={this.checkAdd}>
                Send
            </Button>
            <div className="TopPadding">
            {this.state.visible ? (
                <Alert
                        message="Empty Fields"
                        description="Please finish all fields before sending."
                        type="warning"
                        showIcon
                        closable
                        onClose={this.closeAlert}
                        visible={this.state.visible}
                />
                ) : null
            }
            </div>
        </div>
    )
}
}

export default Create;