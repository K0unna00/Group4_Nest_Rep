import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from 'src/models/blog';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getBlogs(): Blog[] {
    return this.blogService.getBlogs();
  }

  @Get(':id')
  getBlogById(@Param('id') id: number): Blog {
    return this.blogService.getBlogById(id);
  }
}
