
import {getPostsForUser, getUserById} from './api';

showPostsForCurrentUser = (userId, cb ) => {
    const posts = getPostsForUser(userId, posts => {
        const postTemplates = posts.map(post => {
            return `
            <div class="post">
              ${post.title}
              ${post.body}
              ${post.createdBy}
            </div>`
        });

        cb(user);

    })
}

showUserProfile = (userId, cb) => {
    getUserById(userId, user => {
      const profile = `
        <div>
          ${user.name}
        </div>
      `
      cb(user)
    })
  }
  




