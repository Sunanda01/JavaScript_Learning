

/*----Comparison Query Operators----*/
$eq, $gt, $gte, $in, $lt, $lte, $ne, $nin


await model.find({ price: { $gt:100, $lt:500 } ); // display the propperties whose price are greater than 100 and less than 500
await model.find({ type: { $in: ["apple","redmi"] }) // select those whose type are apple and redmi



/*----limit & select----*/

// show any 5 properties whose name is apple
await model.find({ name: "apple" }).limit(5);

// find the price whose type is apple( find only price )
await model.find({ type: "apple" }).select({ price: 1 })


/*----Logical Query Operators----*/
$and $not $nor $or


// show the details whose subject is backend or stream is IT
await model.find({ $or: [{subject:"bakend"},{stream:"IT"}] })
same as all....


/*----count documents----*/
note tehat: count() function is depricated

// count how many apple phones are present in the model
await model.find({ type: "apple" }).countDocuments();




/*----ascending to decending----*/

// sort price field ascending to decending order
await model.find().sort({price:1});

// sort price field decending to ascending order
await model.find().sort({price:-1});


/*----update any document----*/
note that: findByIdAndUpdate() is depricated

await model.updateOne({ _id: id }, { $set: req.body }, { new: true })
same as updateMany()



/*----delete any document----*/

await model.deleteOne({ _id: document id }) // delete only is not return the deleted document
same as deleteMany()

await model.findByIdAndDelete({ _id: document id }) // after delete returm the deleted document



/*----mongoose built in----*/

Read More:
https://mongoosejs.com/docs/validation.html
https://mongoosejs.com/docs/schematypes.html

* note that unique is not a validator

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true, // it removes starting and ending spaces,
		minlength: 3, //work only with string
		maxlength: 12
	}
})



/*----/*----What are hooks in Mongoose ----*/----*/
//Hooks Type ---> 1. pre hooks 2. post hooks

//Example of pre hook :
            // so we have a password and confirm password and after that we can save user data so before save data we need to check password and confirm password
	    Schema.pre('name',()=>{});
//Example of post: 
             Schema.pre('name',()=>{});


/*----/*----populate in mongodb----*/----*/
//It is kinda Joint with Foreign key concept in normal SQL

----------------------------------          ------------------------------------
|         Student Schema         |          |            Course Detail         |
----------------------------------          ------------------------------------
|  Name      |      Rounak       |          |   ID           |    1            |
|---------------------------------          ------------------------------------
|  Age       |      22           |          |   Name         |    Mongo DB     |
|---------------------------------          ------------------------------------
|  Course    |     1             |          |  Hours         |     40 Min      |
|---------------------------------          ------------------------------------

Looks as Data : 
   {
     objectID : "dfbebf455",
     name : "Rounak",
     age : 22,
     course : {
               objectID : "ddjbfbe64645",
	       name : "MongoDB",
	       Hours: "40 Min"
         }
   }
   
Look in Code :
     //1. Create model First
     
      const Student= new mongoose.Schema({
                 name: {type: string}.
		 age: {type: number},
		 course: {
		     type: mongoose.Schema.Types.objectID,
		     ref: "couse" // course model name
		 }
      });
      
      //2. Make APIs
        student.create({
	  course : req.body.courseID,
	  
	});
