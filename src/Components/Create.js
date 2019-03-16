import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
//import emails from '../data/emails.json'
//import moment from 'moment';
import '../App.css'

const { TextArea } = Input

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            to: "",
            subject: ""
        }
    }

    // checkAdd = () => {
    //     if (this.state.text && this.state.to && this.state.subject) {
    //         emails.push({
    //             id: emails.length + 1,
    //             received: moment.format(),
    //             from: "Ronny_Breitenberg41@gmail.com",
    //             subject: this.state.subject,
    //             text: this.state.text,
    //             read: false,
    //             to: this.state.to
    //         })
    //         // return (
                
    //         // )
    //     }
    // }

    render() {
    return (
        <div className="SidePadding">
            <Form layout="vertical">
                <Form.Item
                    label="To:"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Subject:"
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <TextArea rows={4} placeholder="Type your message here"/>
                </Form.Item>
            </Form>
            <Button type="primary">
                Send
            </Button>
        </div>
    )
}
}

export default Create;