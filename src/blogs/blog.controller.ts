import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from 'src/models/blog';

@Controller('home')
export class AppController {
  constructor(private readonly appService: BlogService) {}

  @Get(':id')
  getBlogById(@Param('id') id: number): Blog {
    return this.appService.getBlogById(id);
  }
}
