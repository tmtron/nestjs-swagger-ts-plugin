import { IsInt, IsString } from 'class-validator';
import {Temporal} from "@js-temporal/polyfill";
import Instant = Temporal.Instant;
import {Expose} from "class-transformer";

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @Expose({ name: 'date_time' })
  readonly dateTime: Instant;
}
