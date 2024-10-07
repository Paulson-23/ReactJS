const mongoose=require('mongoose')

const Schema = mongoose.Schema;


const projectSchema =new Schema({
    Title: { type: String ,required: true },
    Desc: { type: String ,required: true },
    Cover: { type: String ,required: true },
    Link: { type: String ,required: true },
},
{
    timestamps:true,
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;