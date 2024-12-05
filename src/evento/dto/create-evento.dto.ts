import { ApiProperty } from '@nestjs/swagger';

export class CreateEventoDto {
  @ApiProperty({ description: 'O título do evento' })
  titulo: string;

  @ApiProperty({ description: 'A descrição do evento' })
  descricao: string;

  @ApiProperty({ description: 'Data de início do evento' })
  dataInicio: Date;

  @ApiProperty({ description: 'Data de fim do evento' })
  dataFim: Date;

  @ApiProperty({ description: 'Local do evento' })
  local: string;

  @ApiProperty({ description: 'Site do evento' })
  site: string;

  @ApiProperty({ description: 'Imagem do card do evento', required: false })
  imagemCard?: string;

  @ApiProperty({ description: 'Imagem de capa do evento', required: false })
  imagemCapa?: string;
}
