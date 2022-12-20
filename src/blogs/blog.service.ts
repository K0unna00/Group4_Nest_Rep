import { Injectable } from '@nestjs/common';
import { Blog } from 'src/models/blog';
import blogsJson from './blogs.json';
import { ICreateBlogRequest } from 'src/models/createBlogRequest';

const blogs = blogsJson.blogs;

@Injectable()
export class BlogService {
  getBlogs(): Blog[] {
    return blogs;
  }

  getBlogById(id: number): Blog {
    return blogs.find((x) => x.id == id);
  }
  // createBlog(request: ICreateBlogRequest): number {
  //   const newId = blogs[blogs.length - 1].id + 1;
  //   const newBlog: Blog = {
  //     id: newId,
  //     title: request.title,
  //     author: request.author,
  //     date: request.date,
  //     commentCount: request.commentCount,
  //   };
  //   blogs.push(newBlog);
  //   return newId;
  // }

  // updateBlog(id: number, request: ICreateBlogRequest) {
  //   const productToChange = this.getProductById(id);
  //   productToChange.categoryId = request.categoryId;
  //   productToChange.name = request.name;
  // }

  // deleteBlog(id: number) {
  //   blogs = blogs.filter((blog) => blog.id !== id);
  // }
}
