<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">Baby Names</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse d-flex" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/compare">Compare</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/new">New</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/charts">Charts</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/androgynous">Androgynous</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<main class="container flex-shrink-0 py-5" style="max-width: 1280px">
		<b-container>
			<b-row>
				<router-view></router-view>
			</b-row>
		</b-container>
	</main>
	<footer class="footer mt-auto py-3 text-center bg-dark text-light">
		<p>This website was created by <a href="https://mark.honeychurch.org" target="_blank" rel="noopener" class="text-reset">Mark Honeychurch</a></p>
	</footer>
</template>
