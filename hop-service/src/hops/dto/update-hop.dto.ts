import { PartialType } from '@nestjs/swagger';
import { CreateHopDto } from './create-hop.dto';

export class UpdateHopDto extends PartialType(CreateHopDto) {}
