<div class="flex items-center justify-center">
  <h2>The package manager for HPC</h2>
</div>

<div class="grid grid-cols-2 gap-2 h-full">
  <div class="flex flex-col justify-between">
    <ul class="list-disc list-inside text-sm mt-4">
        <li class="mb-2">One of the most obvious solutions by/for HPC community.</li>
        <li class="mb-2">Support combinatorics of versions, configurations, platforms, Release/Debug, etc.</li>
        <li class="mb-1">Another nested point</li>
        <li class="mb-1">There <span class="text-gray-600">are </span>
            <a href="https://hepsoftwarefoundation.org/notes/HSF-TN-2016-03.pdf" target="_blank">contenders</a>:
        </li>
        <ul class="text-sm list-inside ml-4">
            <li><code>Nix/Guix</code>, <code>Conda</code>, <code>EasyBuild</code>, <code>Gentoo Prefix</code>, ...</li>
        </ul>
    </ul>
  </div>


  <div>

```plantuml {theme: 'neutral', scale: 0.7, alt: 'Package managers diagram'}
@startuml

skinparam defaultTextAlignment center

!define ICON_SIZE 48
!$ICONURL = "https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v3.0.0/icons"

!include $ICONURL/common.puml
!include $ICONURL/devicons/python.puml
!include $ICONURL/devicons2/pypi.puml
!include $ICONURL/devicons2/cmake.puml
!include $ICONURL/devicons2/spack.puml
!include $ICONURL/devicons2/c.puml
!include $ICONURL/font-awesome-5/user_ninja.puml
!include $ICONURL/font-awesome-5/comment_dots.puml

' Set the overall direction of the diagram
top to bottom direction

' Define the Spack node first
package "Package Manager"{
  DEV2_SPACK(spack, spack, node)
}
' Define groups
package "Build Tool / Package Manager"{
  DEV2_C(meson, Meson, node)
  DEV2_C(bazel, Bazel, node)
  DEV2_CMAKE(cmake, CMake, node)
  DEV2_PYPI(pypi, PyPI, node)
  DEV_PYTHON(poetry, Poetry, node)
  FA5_USER_NINJA(ninja, Ninja, node)
}

' Add connections
spack --> pypi
spack --> cmake
spack --> ninja
spack --> meson
spack --> bazel
spack --> poetry
pypi <-- poetry
cmake <-- meson
ninja <-- meson
ninja <-- cmake
bazel <-- cmake
bazel --> poetry
@enduml
```
  </div>
</div>

<div class="fixed bottom-4 right-4">
  <img src="../images/skao_logo.webp" alt="SKAO Logo" class="w-12 h-4">
</div>
