const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    image: {
        type: String,
        default: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image-705x529.jpg"
    },
    title: String,
    description: String,
    link: String,
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectsSchema);