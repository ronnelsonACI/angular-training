exports.configure = function (api) {

    // GET /api/project/all
    api.get(api.namespace + '/project/all', this.allProjects);

    // GET /api/project/:id/resources
    api.get(api.namespace + '/project/:id/resources', this.projectResources);

    console.info('Project API ready.');
};

this.allProjects = function (req, res) {
    res.status(200).json(require('./mock/projects.json'));
};

this.projectResources = function (req, res) {
    res.status(200).json(require('./mock/' + req.params.id + '/resources.json'));
};