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


router.route('/:id').delete((req,res) => {
    Projects.findByIdAndDelete(req.params.id)
    .then(projects => res.json('Project deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Projects.findById(req.params.id)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').post((req,res) => {
    Projects.findById(req.params.id)
    .then(projects => {
        projects.Title = req.body.Title;
        projects.Desc = req.body.Desc;
        projects.Cover = req.body.Cover;
        projects.Link = req.body.Link;

        projects.save()
            .then(() => res.json("Project updated!"))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;