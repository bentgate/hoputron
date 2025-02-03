
import { IsOptional, IsString, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class SearchHopsDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  flavor?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value)) // Convert string to number
  alphaMin?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  alphaMax?: number;
}
