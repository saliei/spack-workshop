<PythonRunner :autoRun=true :showRunButton=true>

import pyproject2spack

from pyproject2spack.parser.pyproject import PyProject

from pyproject2spack.matcher.spack import Spack

from pyproject2spack.renderer.jinja2 import Renderer

print(pyproject2spack.__version__)

gitlab_url = "https://gitlab.com/ska-telescope/sdp/science-pipeline-workflows/ska-sdp-instrumental-calibration"
# parse pyproject.toml file
prj = PyProject(giturl=gitlab_url)
constraints = prj.dependencies()
metadata = prj.metadata()

# match version constraints to that of spack database
matcher = Spack(constraints=constraints)
matches = matcher.match()

# render a template given template variables
renderer = Renderer(matches=matches, metadata=metadata)
renderer.render()

</PythonRunner>

