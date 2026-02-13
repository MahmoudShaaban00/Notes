import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schemas/notes.schema';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Notes') private readonly notesModel:Model<Notes>){}

     addNote(note:Notes){
     this.notesModel.insertMany(note)
        return {message:"Note added successfully"}
    }

   async getAllNotes(){
        let notes = await this.notesModel.find().populate('user','name email');
        return {message:"All notes fetched successfully",notes}
   }

   async deleteNote(id:string){
      let note =   await this.notesModel.findByIdAndDelete(id)
        return {message:"Note deleted successfully" , note}
   }

   async updateNote(id:string,note:Notes){
    let updatedNote = await this.notesModel.findByIdAndUpdate(id,note,{new:true})
    return {message:"Note updated successfully",updatedNote}
   }
}
