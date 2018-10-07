import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PractiseSchema = new Schema({
  title: {
    type:String
  },
  description:{
    type:String
  },
  duration:{
    type:String
  },
  extitle:{
    type:String
  }
});

export const ExerciseSchema = new Schema({
          title:{
            type:String
          },
          extitle: {
            type:String
          },
          exdescription:{
            type:String
          },
          exduration:{
            type:String
          }

});

export const Practise_exercisesSchema = new Schema({
      title: {
        type:String
      },
      description:{
        type:String
      },
      duration:{
        type:String
      },
      extitle: {
        type:String
      },
      exdescription:{
        type:String
      },
      exduration:{
        type:String
      }

})
