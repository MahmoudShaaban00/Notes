import { IsMongoId, IsOptional, MaxLength, MinLength } from "class-validator";

export class AddNoteDto {
    @MaxLength(100)
    @MinLength(3)
    title: string;
    @MaxLength(2000)
    @MinLength(3)
    description: string;
    @IsMongoId()
    user: string
}

export class ParamIdDto {
    @IsMongoId()
    id: string
}

export class UpdateNoteDto {
    @MaxLength(100)
    @MinLength(3)
    @IsOptional()
    title: string;

    @MaxLength(2000)
    @MinLength(3)
    @IsOptional()
    description: string;
    
    @IsMongoId()
    @IsOptional()
    user: string
}