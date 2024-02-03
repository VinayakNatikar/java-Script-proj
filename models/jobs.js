const mongoose=require('mongoose');
const validator=require('validator');
 
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please enter job title'],
        trim:true,
        maxlength:[100,'job title can not exceed 100 characters.'],

    },
    slug:String,
    description: {
        type:String,
        required:[true,'please enter job description'],
        maxlength:[1000,'job description can not exceed 1000 characters.']
    }   ,
    email:{
        type:String,
        validate:[validator.isEmail,'please add valid email address.'],     
    },
    adress:{
        type:String,
        required:[true,'please add an address.']
    },
    company:{
        type:String,
        required:[true,'please add company name.']

    },
    industry:{
        type:[String],
        required:String,
        enum:{
            values:[
                'Business',
                'Information Technology',
                'Banking',
                'Education/Traning',
                'Telecommunication',
                'other'
            ],
            message:'please select correct option for job type.'
        }
    },
    minEducation:{
        type:String,
        required:true,
        enum:{
            values:[
                'Bachelors',
                'Masters',
                'Phd'
            ],
            message:'please select correct option for Education'
        }
    },
    positions:{
        type:Number,
        default:1
    },
    exprience:{
        type:String,
        required:true,
        enum:{
            values:[
                'No Experience',
                '1 year-2 Year',
                '2 Year-5 Year',
                '5 year+'
            ],
            message:'please select option for experience.'
        }
    },
    salary:{
        type:Number,
        required:[true,'please enter expected Salary for this job.']
    },
    postingDate:{
        type:Date,
        default:Date.now
    },
    lastDate:{
        type:Date,
        dafault:new Date().setDate(new Date().getDate()+7)
    },
    applicantsApplied:{
        type:[Object],
        select:false,

    }
});


module.exports=mongoose.model('job',jobSchema);