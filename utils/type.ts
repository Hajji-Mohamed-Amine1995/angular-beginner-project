enum DataType {
  POSTS = "posts",
  COMMENTS = "comments",
  USERS = "users",
  ALBUMS = "albums",
  PHOTOS = "photos",
  TODOS = "todos",
}
type Comment = {
  postId:number
  id:number
  email:string
  body:string
  name:string
}
type Post = {
  userId:number
  id:number
  title:string
  body:string
}
type User = {
  id:number
  name:string
  username:string
  email:string
  address:{
    street:string
    suite:string
    city:string
    zipcode:string
    geo:{
      lat:string
      lng:string
    }
  }
  phone:string
  website:string
  company:{
    name:string
    catchPhrase:string
    bs:string
  }
}
type Album = {
  userId:number
  id:number
  title:string
}
type Photo = {
  albumId:number
  id:number
  title:string
  url:string
  thumbnailUrl:string
}
type Todo = {
  userId:number
  id:number
  title:string
  completed:boolean
}
export const environment = {
  production: false,
  REQUEST_URL: "https://jsonplaceholder.typicode.com/"
};

export type {Post,User,Comment,Album,Photo,Todo}
export {DataType}
