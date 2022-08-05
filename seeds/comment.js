const { Comment } = require("../models")

const comments = [
    {
        content: 'this is boring',
        user_id: 1,
        post_id: 2
    },
    {
        content: 'this is boring',
        user_id: 2,
        post_id: 1
    },
    {
        content: 'this is boring',
        user_id: 3,
        post_id: 3
    }
];
const cmnts = () => Comment.bulkCreate(comments);

module.exports = cmnts;