const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
{
    key:{
        type:String,
        required:true
    },

    label:{
        type:String,
        required:true
    },

    enabled:{
        type:Boolean,
        default:true
    },

    order:{
        type:Number,
        default:0
    }

},{_id:false});

const colorSchema = new mongoose.Schema(
{
    primary:{
        type:String,
        default:"#2563eb"
    },

    secondary:{
        type:String,
        default:"#1e293b"
    },

    accent:{
        type:String,
        default:"#0ea5e9"
    },

    background:{
        type:String,
        default:"#ffffff"
    },

    text:{
        type:String,
        default:"#111827"
    }

},{_id:false});

const fontSchema = new mongoose.Schema(
{
    heading:{
        type:String,
        default:"Poppins"
    },

    body:{
        type:String,
        default:"Inter"
    },

    fontSize:{
        type:Number,
        default:12
    }

},{_id:false});

const ResumeTemplateSchema = new mongoose.Schema(

{

    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    description:{
        type:String,
        default:""
    },

    category:{
        type:String,
        enum:[
            "Professional",
            "Modern",
            "Creative",
            "Minimal",
            "Executive"
        ],
        default:"Professional"
    },

    thumbnail:{
        type:String,
        default:""
    },

    previewImages:[
        {
            type:String
        }
    ],

    htmlTemplate:{
        type:String,
        required:true
    },

    cssTemplate:{
        type:String,
        default:""
    },

    colors:{
        type:colorSchema,
        default:()=>({})
    },

    fonts:{
        type:fontSchema,
        default:()=>({})
    },

    sections:{
        type:[sectionSchema],
        default:[]
    },

    atsFriendly:{
        type:Boolean,
        default:true
    },

    premium:{
        type:Boolean,
        default:false
    },

    featured:{
        type:Boolean,
        default:false
    },

    active:{
        type:Boolean,
        default:true
    },

    usageCount:{
        type:Number,
        default:0
    },

    downloadCount:{
        type:Number,
        default:0
    },

    rating:{
        type:Number,
        default:5,
        min:0,
        max:5
    },

    totalRatings:{
        type:Number,
        default:0
    },

    tags:[
        {
            type:String
        }
    ],

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true,
    versionKey:false
}
);