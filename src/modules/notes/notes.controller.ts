import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards ,Req} from '@nestjs/common';
import { NotesService } from './notes.service';
import { AddNoteDto, ParamIdDto, UpdateNoteDto } from './dto/notes.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private readonly _notesService:NotesService){}

    @Post()
AddNote(@Body() body: AddNoteDto, @Req() req: any) {

  const noteData = {...body, user: req.user.id };

  return this._notesService.addNote(noteData);
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
