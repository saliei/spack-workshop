<div class="grid grid-cols-2 gap-2 h-50vh">
<div class="flex flex-col h-full">
<ul>
    <li>Hands-on:</li>


```bash {hide|1-3|5-8|9-13|all}
# naturally different variant, change dependency graph
spack spec py-ska-sdp-func +mkl
spack spec py-ska-sdp-func ~mkl

# create a temporary environment to avoid reconcretization
spack env activate --temp
spack add py-ska-sdp-func
spack concretize
# generate a graph of environment in dot language
spack graph --color --dot 
# or a specific package, can be visualized
# with a Graphviz compiler
spack graph --color --dot py-ska-sdp-func
```
<li>Concretizer can actively try to reuse specs:</li>

```bash {hide|1,2|3,4|all}
# reuse while solving and view the ASP facts also 
spack solve --reuse --show=asp py-ska-sdp-func
# assume a fresh environment
spack solve --fresh py-ska-sdp-func
```

<li>e.g. only reuse specs compiled with GCC</li>

```bash {hide|all}
# file: $SPACK_ROOT/etc/spack/defaults/concretizer.yaml
concretizer:
	reuse:
		roots: true
		include:
		- "%gcc"
```
</ul>
</div>
  <div class="flex flex-col h-full">

<ul>
<li>Concretizer is searching a combinatorial space</li>


```bash{hide|1,2,8|3,8|4,9|5,9|6,9|7,8,9|all}
spack solve --timers py-ska-sdp-func
    setup             4.254s
    load              0.541s
    ground            3.222s
    solve             1.179s
    construct_specs   0.103s
    total             9.484s
lib/spack/solver/asp.py
lib/spack/solver/concretize.lp

==> Best of 2 considered solutions.
==> Optimization Criteria:
  Priority  Criterion                                            Installed  ToBuild
  1         requirement weight                                           -        0
  2         number of packages to build (vs. reuse)                      -        0
  3         number of nodes from the same package                        -        0
  4         deprecated versions used                                     3        0
  5         version badness (roots)                                      5        0
  6         number of non-default variants (roots)                       1        0
  7         preferred providers for roots                                0        0
  8         default values of variants not being used (roots)            1        0
  9         number of non-default variants (non-roots)                  10        0
  10        preferred providers (non-roots)                              0        0
  11        compiler mismatches that are not required                    3        0
  12        compiler mismatches that are required                        0        0
  13        non-preferred OS's                                          44        0
  14        version badness (non roots)                                319        0
  15        default values of variants not being used (non-roots)        2        0
  16        non-preferred compilers                                     44        0
  17        target mismatches                                            3        0
  18        non-preferred targets                                      110        0
  19        compiler mismatches (runtimes)                               0        0
  20        version badness (runtimes)                                   0        0
  21        non-preferred targets (runtimes)                             0        0
  22        edge wiring                                                570        0
```
</ul>
</div>
</div>

<div class="fixed bottom-2 right-4">
  <img src="../images/skao_logo.webp" alt="SKAO Logo" class="w-12 h-4">
</div>

<style>
pre {
    --slidev-code-font-size: 0.45em;
}

.slidev-code-wrapper {
    width: 100%;
}
</style>
