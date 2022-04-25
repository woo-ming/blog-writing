import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  UseInterceptors,
  Logger,
  UseFilters,
} from '@nestjs/common';
import { CatsFilter } from 'src/filters/cats.filter';
import { CatsGuard } from 'src/guards/cats.guard';
import { CatsInterceptor } from 'src/Interceptors/cats.interceptor';
import { CatsPipe } from 'src/pipes/cats.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@UseFilters(CatsFilter)
@UseGuards(CatsGuard)
@UsePipes(CatsPipe)
@UseInterceptors(CatsInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @UseGuards(CatsGuard)
  @UsePipes(CatsPipe)
  @UseInterceptors(CatsInterceptor)
  @Get()
  findAll() {
    Logger.log('Cats Controller');
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
