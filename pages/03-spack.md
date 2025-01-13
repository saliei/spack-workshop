<h1 text-center>Getting Started</h1>

<div class="flex">
<div class="flex-2">
    <ul>
    <li><a href="https://spack.readthedocs.io/en/latest/getting_started.html" target="_blank">"Installation"</a> is easy:

```bash {hide|1-2|3-4|5-6|7-8|9-10|all}
# clone the repo
git clone -c feature.manyFiles=true --depth=2 --branch=releases/v0.23 https://github.com/spack/spack.git
# source envs for sh/bash/zsh/csh/tcsh/fish
. spack/share/spack/setup-env.fish
# configure compiler suite (~/.spack/linux/compilers.yaml)
spack compiler find
# check bootstrap status (check for missing clingo or gpg2)
spack bootstrap status
# bootstrap manually (spack will do by default at first run)
spack bootstrap now
```
</li>
<li>Add repos and buildcaches

```bash {hide|1-3|4-8|all}
# after cloning https://gitlab.com/ska-telescope/sdp/ska-sdp-spack
spack repo add ska-sdp-spack/
spack repo list
# add binary cache mirrors
spack mirror add v0.23.0 https://binaries.spack.io/v0.23.0
spack mirror add E4S https://cache.e4s.io/24.11
spack buildcaches keys --install --trust
spack mirror list
```
</li>
<li>Specify installation specs

```bash {hide|1-2|3-4|5-6|7-8|all}
# specify a version with '@'
spack install py-ska-sdp-func@1.2.2
# specify a compiler suite with '%'
spack install py-ska-sdp-func@1.2.2 %oneapi
# activate or deactivate boolean variants, '+' and '~' 
spack install py-ska-sdp-func@1.2.2 %oneapi +mkl ~cuda
# specify multi-valued variants or reserved keywords
spack install py-ska-sdp-func@1.2.2 %oneapi +mkl +cuda cuda_arch=8.6 target=x86_64_v3
```
</li>
</ul>
</div>

  <div class="flex-1 flex items-center justify-right">
    <figure class="w-3/4">
      <img src="../images/abstraction.webp" alt="Description">
    </figure>
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
    width: 105%;
}
</style>
