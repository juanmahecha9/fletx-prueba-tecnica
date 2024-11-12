import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    try {
      return this.servicesService.create(createServiceDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          response: {
            allow: false,
            message: error,
            info: 'Deny',
          },
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  @Get()
  findAll() {
    try {
      return this.servicesService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          response: {
            allow: false,
            message: error,
            info: 'Deny',
          },
        },
        HttpStatus.CONFLICT,
      );
    }
  }
}
