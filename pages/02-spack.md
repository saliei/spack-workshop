<h1 text-center> There are no "Packages", There are Hashes!</h1>

<div class="grid grid-cols-2 gap-2 h-49vh">
  <div class="flex flex-col h-full">
    <ul>
    <li>Identify each installation with a hash.
        <ul style="font-size: 11px;">
            <li><span font-semibold>Package Specifications: </span>name, version, and variant settings (e.g., +mpi or ~debug).</li>
            <li><span font-semibold>Dependency Graph: </span>include all transitive dependencies (direct and indirect)</li>
            <li><span font-semibold>Compiler Information: </span>GCC 14.2.0, GCC 14.2.1, Clang, Intel, ...</li>
            <li><span font-semibold>Compiler Flags: </span>custom CFLAGS, FFLAGS, ...</li>
            <li><span font-semibold>Platform Information: </span>x86_64, arm64, ppc64le</li>
            <li><span font-semibold>Dependency Packages Hashe: </span>each dependency has it's own hash</li>
            <li><span font-semibold>Environment Variables: </span>ENVs that can affect build process, <code>config.yaml</code>, <code>packages.yaml</code>, <code>compilers.yaml</code>, ...</li>
        </ul>
    </li>
    <li v-click>Concretizer uses <a href="https://potassco.org/clingo/" target="_blank">Clingo</a> to resolve the dependency graph.
        <ul style="font-size: 11px;">
            <li>Combinatorial search problem (NP-hard).</li>
            <li>Translate specifications and constraints to a logic program in <a href="https://potassco.org/" target="_blank">ASP</a> (Answer Set Programming).</li>
            <li>20,000-30,000 <a href="https://www.trex-coe.eu/sites/default/files/TREX%20Build-systems%20Hackathon%20-%20Nov%202021/TREX%20-%20Spack%20presentation.pdf" target="_blank">facts</a>
            (dependencies, options), 1000 loc of logic program (constraints, optimization criteria).</li>
            <li>Leverage <a href="https://www.imn.htwk-leipzig.de/~waldmann/etc/untutorial/asp/" taget="_blank">SAT</a> (Satisfiability) solvers to build the DAG (Directed Acyclic Graph).</li>
        </ul>
    </li>
    </ul>
  </div>

  <div v-after class="flex flex-col h-full">

```plantuml {scale: 0.90}
@startmindmap

skinparam defaultTextAlignment center

* py-ska-sdp-func%oneapi+mkl
** cmake
*** curl
**** ...
*** gcc-runtime
*** gmake
*** ncurses
*** zlib-ng
** glibc
** intel-oneapi-mkl
*** intel-tbb
**** ...
** intel-oneapi-runtime
** py-numpy
*** openblas
*** py-cython
*** py-meson-python
**** ...
** py-pip
** py-setuptools
** py-wheel
** python
*** bzip2,expat,gdbm,gettext,libffi,libxcrypt
**** ...
*** openssl,pkgconf,readline,sqlite,xz
**** ...
** python-venv

@endmindmap
```
  </div>

</div>

<div class="fixed bottom-2 right-4">
  <img src="../images/skao_logo.webp" alt="SKAO Logo" class="w-12 h-4">
</div>
