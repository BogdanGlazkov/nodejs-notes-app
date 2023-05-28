import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next();
  }
};

export const getNoteById: RequestHandler = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;

    const note = await NoteModel.findById(noteId).exec();
    res.status(200).json(note);
  } catch (error) {
    next();
  }
};

export const createNote: RequestHandler = async (req, res, next) => {
  try {
    const title = req.body.title;
    const text = req.body.text;

    const newNote = await NoteModel.create({ title, text });
    res.status(201).json(newNote);
  } catch (error) {
    next();
  }
};
