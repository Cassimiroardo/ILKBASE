import axios from 'axios'

export const allPosts = _ => {
    return axios
        .get('http://localhost:5000/posts/all')
            .then(posts => {
                return posts.data
            }).catch(err => {
                console.log('erro!: '+err)
            })
}