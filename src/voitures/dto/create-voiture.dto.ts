import { ApiProperty } from '@nestjs/swagger';

export class CreateVoitureDto {
  @ApiProperty()
  model: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  cv: number;
}