import React, {Component} from 'react';
import '../App.css';
import emails from '../data/emails.json'
import { Table, Card, Modal } from 'antd';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailVisible: false,
            currentEmail: {}
        }
    }

    setEmail = (record) => {
        this.setState({
            emailVisible: true,
            currentEmail: record
        })
    }

    handleOk = () => {
        this.setState({emailVisible: false})
    };
    
    render() {
        //const { email } = this.state.currentEmail;
        //console.log(emails[0].id)
        const columns = [
            {
                title: "From",
                dataIndex: "from",
                key: "from"
            },
            {
                title: "Subject",
                dataIndex: "subject",
                key: "subject"
            }
        ]
        return (
            <div className="SidePadding">
                <Table
                    dataSource={emails}
                    rowKey="id"
                    columns={columns}
                    onRow={(record) => ({ onClick: () => { this.setEmail(record) } })}
                />
                <Modal
                    visible={this.state.emailVisible}
                    onCancel={this.handleOk}
                    onOk={this.handleOk}
                    
                >
                    <Card
                        title={"From: ".concat(this.state.currentEmail.from)}
                        //current={this.state.currentEmail}
                    >
                        <h4>
                            {"Subject: ".concat(this.state.currentEmail.subject)}
                        </h4>
                        <p>
                            {this.state.currentEmail.text}
                        </p>
                    </Card>
                </Modal>
            </div>
        )
    }
}

export default Grid;