import{ addNewPractise,
        getPractises,
        updatePractise,
        deletePractise,
        getPractiseById} from '../controllers';
import{ addNewExercise,
        getExercises,
        updateExercise,
        deleteExercise,
        getExerciseById} from '../controllers';

export const routes = (app)=>{
    app.route('/practise')
        .get((req,res,next)=>{
              console.log(`Get all practises ${req.url} ${req.method}`);
              next();
        }, getPractises)
        .post((req,res,next)=>{
              console.log(`Add New Practise: ${JSON.stringify(req.body)}`);
              next();
        }, addNewPractise)

    app.route('/practise/:practiseId')
        .get((req,res,next)=>{
            console.log(`Get Practise Id:${req.params.practiseId}`);
            next();
        }, getPractiseById)
        .put((req,res,next)=>{
              console.log(`Update Practise Id:${req.params.practiseId}`);
              next();
          }, updatePractise)
        .delete((req,res,next)=>{
              console.log(`Delete Practise Id:${req.params.practiseId}`);
              next();
        }, deletePractise);

        app.route('/exercise')
            .get((req,res,next)=>{
                  console.log(`Get practise Exercises ${req.url} ${req.method}`);
                  next();
            }, getExercises)
            .post((req,res,next)=>{
                  console.log(`Add New Exercise: ${JSON.stringify(req.body)}`);
                  next();
            }, addNewExercise)

        app.route('/exercise/:exerciseId')
            .get((req,res,next)=>{
                console.log(`Get Execise Id:${req.params.exerciseId}`);
                next();
            }, getExerciseById)
            .put((req,res,next)=>{
                  console.log(`Update Exercise Id:${req.params.exerciseId}`);
                  next();
              },updateExercise )
            .delete((req,res,next)=>{
                  console.log(`Delete Exercise Id:${req.params.exerciseId}`);
                  next();
            }, deleteExercise);
};
