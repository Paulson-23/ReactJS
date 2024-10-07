const router = require('express').Router();
let Projects = require('../models/project.model');

router.route('/').get((req,res) => {
    Projects.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {

    const {Title, Desc, Cover, Link} = req.body;

    const newProject = new Projects({
        Title,
        Desc,
        Cover,
        Link
    });
    newProject.save()
    .then(projects => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;