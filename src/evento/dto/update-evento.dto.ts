import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @ApiPropertyOptional({ description: 'O título do evento' })
  titulo?: string;

  @ApiPropertyOptional({ description: 'A descrição do evento' })
  descricao?: string;

  @ApiPropertyOptional({ description: 'Data de início do evento' })
  dataInicio?: Date;

  @ApiPropertyOptional({ description: 'Data de fim do evento' })
  dataFim?: Date;

  @ApiPropertyOptional({ description: 'Local do evento' })
  local?: string;

  @ApiPropertyOptional({ description: 'Site do evento' })
  site?: string;

  @ApiPropertyOptional({ description: 'Imagem do card do evento', required: false })
  imagemCard?: string;

  @ApiPropertyOptional({ description: 'Imagem de capa do evento', required: false })
  imagemCapa?: string;
}
