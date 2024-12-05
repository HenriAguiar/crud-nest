import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEventoDto) {
    return this.prisma.evento.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.evento.findMany({
      include: {
        tags: true,
        programacoes: true,
        ingressos: true,
        produtos: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.evento.findUnique({
      where: { id },
      include: {
        tags: true,
        programacoes: true,
        ingressos: true,
        produtos: true,
      },
    });
  }

  async update(id: number, data: UpdateEventoDto) {
    return this.prisma.evento.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.evento.delete({
      where: { id },
    });
  }
}
