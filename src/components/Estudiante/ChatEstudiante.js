import React from 'react';

// Chat 1 - Librerias
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

// Chat 2 -Librerias
import { Launcher } from 'react-chat-window'


// Chat 3 - librerias
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class ChatEstudiante extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
        }
    }

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {

        const { likes, dislikes, action } = this.state;

        const actions = [
            <span>
                <Tooltip title="Like">
                    <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        onClick={this.like}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span>
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
            <span>Reply to</span>,
        ];

        const ExampleComment = ({ children }) => (
            <Comment
                actions={[<span>Reply to</span>]}
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                </p>
                }
            >
                {children}
            </Comment>
        );

        return (
            // Chat 1
            <ExampleComment>
                <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                </ExampleComment>
            </ExampleComment>

            // Chat 2
            // <div>
            //     <Launcher
            //         agentProfile={{
            //         teamName: 'react-chat-window',
            //         imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            //         }}
            //         onMessageWasSent={this._onMessageWasSent.bind(this)}
            //         messageList={this.state.messageList}
            //         showEmoji
            //     />
            // </div>
            
            
            
            
            // Chat 3
            // <div className="App">
            //     <Widget />
            // </div>
        )
    }
}
export default ChatEstudiante;