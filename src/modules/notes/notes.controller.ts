import { Controller, Post, Body, Get, Delete, Param, Put} from '@nestjs/common';
import { NotesService } from './notes.service';
import { AddNoteDto, ParamIdDto, UpdateNoteDto } from './dto/notes.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly _notesService:NotesService){}

    @Post()
    AddNote(@Body() body:AddNoteDto){
        return this._notesService.addNote(body)
    }
    @Get()
    GetAllNotes(){
        return this._notesService.getAllNotes()
    }
    @Delete('/:id')
    DeleteNote(@Param() paramIdDto:ParamIdDto){
        return this._notesService.deleteNote(paramIdDto.id)
    }
    @Put('/:id')
    UpdateNote(@Param() paramIdDto:ParamIdDto,@Body() body:UpdateNoteDto){
        return this._notesService.updateNote(paramIdDto.id,body)
    }
}
