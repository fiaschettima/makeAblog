const { BlogPost } = require("../models")

const postData = [
    {
        user_id: 1,
        post_title: 'Krabby Patty',
        post_content: 'they are delicous to eat secret recipes and what not'
    },
    {
        user_id: 1,
        post_title: 'Rust Bucket',
        post_content: 'plankton cant cook so its dead there'
    },
    {
        user_id: 3,
        post_title: 'Under the Sea',
        post_content: 'ohhhhhhhhhhhhhhhhhhhhh unde the sea'
    }
];
const posts = () => BlogPost.bulkCreate(postData);

module.exports = posts;