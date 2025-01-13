---
layout: two-cols
---

# This is something

```py
from spack.package import *


class PySkaSdpFunc(PythonPackage):
    """Python bindings for SDP Processing Function Library, A collection of high-performance 
    data processing utility functions for the Square Kilometre Array."""

    homepage = "https://gitlab.com/ska-telescope/sdp/ska-sdp-func"
    url = "https://gitlab.com/ska-telescope/sdp/ska-sdp-func/-/archive/1.2.0/ska-sdp-func-1.2.0.tar.gz"
    git = "https://gitlab.com/ska-telescope/sdp/ska-sdp-func"

    maintainers("saliei")

    license("BSD-3-Clause")

    version("develop", branch="main")
    version("1.2.2", sha256="7d40b3f8d0f18199a3ea85d4123af911a021a4e62a51140eac754c80f72a6c2c", preferred=True)

    depends_on("c", type="build")
    depends_on("cxx", type="build")
    depends_on("cmake@3.1.0:", type="build")

    variant("cuda", default=False, description="Build CUDA kernels")
    variant("mkl", default=False, description="Build with Intel MKL support")

    depends_on("py-numpy", type="run")

    depends_on("cuda@7.0.0:", when="+cuda")
    depends_on("intel-oneapi-mkl@2021.1.1:", when="+mkl")

    def setup_build_environment(self, env):
        cmake_args = []

        if "+cuda" in self.spec:
            cmake_args.append("-DFIND_CUDA=ON")
            if "+cuda_arch" in self.spec:
                cmake_args.append("-DCUDA_ARCH={0}".format(";".join(self.spec["cuda_arch"].value)))
        else:
            cmake_args.append("-DFIND_CUDA=OFF")

        if "+mkl" in self.spec:
            cmake_args.append("-DFIND_MKL=ON")
        else:
            cmake_args.append("-DFIND_MKL=OFF")

        env.set("CMAKE_ARGS", " ".join(cmake_args))
```


