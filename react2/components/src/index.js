import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author= "Sam" 
            timeAgo="Today at 4:45Pm" 
            avatar = {faker.image.image()}
            />
            <CommentDetail author= "Alex"
             timeAgo="Today at 2:00Am" 
             avatar = {faker.image.image()}
             />
            <CommentDetail author= "Jane" 
            timeAgo="Yesterday at 4:45Pm" 
            avatar = {faker.image.image()}
            />

        </div>
        



    )
};

ReactDOM.render(

    <App />,
    document.querySelector('#root')
);
