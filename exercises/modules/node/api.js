
data = require('./data')

getUserById = (id, cb ) => {
    const user = data.users.find(user => user.id === id);
    cb(user);
}
getPostsForUser = (userId, cb ) => {
    setTimeout(() => {
        const posts =  data.posts.filter(post => post.createdBy === userId);
        cb(posts); 
    }, 150 );
}

module.exports = { getUserById, getPostsForUser};