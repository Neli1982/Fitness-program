import mongoose from 'mongoose';
import { PractiseSchema } from '../models';
import { ExerciseSchema } from '../models';
import { Practise_exercisesSchema } from '../models';

const Practise  = mongoose.model('Practise', PractiseSchema);
const Exercise = mongoose.model('Exercise', ExerciseSchema);

//POST
export const addNewPractise = (req,res)=>{
    const newPractise = new Practise(req.body);

    newPractise
        .save()
        .then((practise)=>res.json(practise))
        .catch((err)=>res.json(err));

};//add new Practise
export const addNewExercise = (req,res)=>{
    const newExercise = new Exercise(req.body);

    newExercise
        .save()
        .then((exercise)=>res.json(exercise))
        .catch((err)=>res.json(err));

};//add new Exercise


//GET
export const getPractises = (req,res)=>{
    Practise
        .find({})
        .then((practises)=>res.json(practises))
        .catch((err)=>res.json(err));

}//get practises

export const getExercises = (req,res)=>{
    Exercise
        .find({})
        .then((exercises)=>res.json(exercises))
        .catch((err)=>res.json(err));

}//get exercises

export const getPractiseById = (req,res)=>{
    Practise
        .findOne({_id:req.params.practiseId})
        .then((practise)=>res.json(practise))
        .catch((err)=>res.json(err));
}//get Practise by id

export const getExerciseById = (req,res)=>{
    Exercise
        .findOne({_id:req.params.exerciseId})
        .then((exercise)=>res.json(exercise))
        .catch((err)=>res.json(err));
}//get Exercise by id
//PUT
export const updatePractise = (req,res)=>{
    Practise
        .findOneAndUpdate({_id:req.params.practiseId},
                          req.body,
                          {upsert:true,
                          returnNewDocument:false})
        .then((practise)=>res.json(practise))
        .catch((err)=>res.json(err));
}//update practise

export const updateExercise = (req,res)=>{
    Exercise
        .findOneAndUpdate({_id:req.params.exerciseId},
                          req.body,
                          {upsert:true,
                          returnNewDocument:false})
        .then((exercise)=>res.json(exercise))
        .catch((err)=>res.json(err));
}//update exercise

//DELETE
export const deletePractise = (req,res)=>{
    Practise
        .remove({_id:req.params.practiseId})
        .then((status)=>res.json(status))
        .catch((err)=>res.json(err));
};//delete practise

export const deleteExercise = (req,res)=>{
    Exercise
        .remove({_id:req.params.exerciseId})
        .then((status)=>res.json(status))
        .catch((err)=>res.json(err));
};//delete exercise
