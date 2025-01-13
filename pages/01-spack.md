<div class="flex items-center justify-center">
  <h2>The package manager for HPC</h2>
</div>

<div class="grid grid-cols-2 gap-1 h-50vh">
  <div class="flex flex-col h-full">
    <v-clicks><ul class="list-disc list-inside text-sm mt-4">
        <li class="mb-2">Installation is <span style="font-weight:600;">more</span> than just a name and version.
        <ul style="font-size:10px;">
            <li>Which compiler suite was used?</li>
            <li>Which architecture was it built for?</li>
            <li>Which flags were used?</li>
            <li>Which falvour of a dependency was used?</li>
        </ul>
        </li>
        <li class="mb-2">We may often need to install multiple variants of the same package.</li>
        <li class="mb-2">HPC violates many of the assumptions made by package managers.
            <ul style="font-size:10px;">
                <li>Portable binaries (bad for performance, use of system optimized libs) </li>
                <li>Same toolchain across the ecosystem (multiple languages).</li>
                <li>Binary and source code are 1-to-1 (good for reproducibility, bad for performance, multiple variants).</li>
            </ul>
        </li>
        <li class="mb-2">One of the most obvious solutions by/for HPC community.</li>
        <li class="mb-2">Support combinatorics of versions, configurations, platforms, Release/Debug, etc.</li>
        <li class="mb-1">There <span style="font-style:italic;">are</span> other 
            <a href="https://hepsoftwarefoundation.org/notes/HSF-TN-2016-03.pdf" target="_blank">solutions</a>:
            <ul class="list-inside ml-4">
                <li style="font-size:10px;"><code>Nix/Guix</code>,<code>Conda</code>,<code>Gentoo Prefix</code>,<code>EasyBuild</code></li>
            </ul>
        </li>
    </ul></v-clicks>
  </div>
  <div class="flex flex-col items-start justify-center h-full">
   <figure v-after class="w-4/5 ml-auto">
      <img src="../images/spack_vs_others.webp" alt="Description">
      <figcaption class="text-center text-[9px] mb-2">
        Spack compared to other package managers. Credit: 
        <a href="https://spack.io/files/spack-rd100-2019-final-with-letters.pdf" target="_blank">
            Lawrence Livermore National Laboratory
        </a>
      </figcaption>
    </figure>
  </div>
</div>

<div class="fixed justify-center bottom-2 right-4">
  <img src="../images/skao_logo.webp" alt="SKAO Logo" class="w-12 h-4">
</div>
