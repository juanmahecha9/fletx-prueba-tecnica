import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/lib/db/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    try {
      const data = await this.prisma.service_tbl.create({
        data: createServiceDto,
      });
      return {
        data,
        message: 'Servicio creado',
      };
    } catch (e) {
      throw Error('Error en la creación del servicio');
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.service_tbl.findMany();
      return {
        data,
        message: 'Servicio creado',
      };
    } catch (e) {
      throw Error('Error en la creación del servicio');
    }
  }
}
