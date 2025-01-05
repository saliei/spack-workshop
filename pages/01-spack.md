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
    <figure class="mt-4">
      <img src="../images/spack_loc_2022.webp" alt="Description" class="mx-auto">
      <figcaption class="text-center text-[6px] mb-2">
        Credit: 
        <a href="https://computing.llnl.gov/projects/spack-hpc-package-manager" target="_blank">
            Lawrence Livermore National Laboratory
        </a>
      </figcaption>
    </figure>
  </div>


  <div>


```plantuml {scale: 1}
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

<div class="fixed bottom-4 right-4">
  <img src="../images/skao_logo.webp" alt="SKAO Logo" class="w-12 h-4">
</div>
